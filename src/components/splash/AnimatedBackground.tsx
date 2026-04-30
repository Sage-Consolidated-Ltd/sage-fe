// src/components/AnimatedGridBackground.tsx
import React, { useRef, useEffect, useCallback } from "react";

interface GridConfig {
  cellSize: number;
  lineColor: string;
  lineWidth: number;
  glowWidth: number;
  coreWidth: number;
  headWidth: number;
  speed: number;
  maxTravelers: number;
  travelerLength: number;
  color: string;
  fadeHeight: number;
  fadeColor: string;
  minStraightDistance: number;
}

interface Traveler {
  x: number;
  y: number;
  direction: "up" | "down" | "left" | "right";
  speed: number;
  length: number;
  opacity: number;
  life: number;
  maxLife: number;
  lastTurnX: number;
  lastTurnY: number;
  turning: boolean;
}

const DEFAULT_CONFIG: GridConfig = {
  cellSize: 50,
  lineColor: "rgba(148, 163, 184, 0.12)",
  lineWidth: 1,
  glowWidth: 2,
  coreWidth: 1,
  headWidth: 1.5,
  speed: 1.5,
  maxTravelers: 3,
  travelerLength: 500,
  color: "#FF90000D",
  fadeHeight: 120,
  fadeColor: "#171717",
  minStraightDistance: 3,
};

const AnimatedGridBackground: React.FC<{
  config?: Partial<GridConfig>;
  className?: string;
}> = ({
  config = {},
  className = "absolute inset-0 w-full h-full pointer-events-none",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const travelersRef = useRef<Traveler[]>([]);
  const animationRef = useRef<number>(0);
  const mergedConfig = { ...DEFAULT_CONFIG, ...config };

  const pickDirection = useCallback(
    (current: Traveler["direction"]): Traveler["direction"] => {
      const opposites: Record<string, Traveler["direction"]> = {
        up: "down",
        down: "up",
        left: "right",
        right: "left",
      };
      const dirs: Traveler["direction"][] = ["up", "down", "left", "right"];
      const valid = dirs.filter((d) => d !== opposites[current]);
      return valid[Math.floor(Math.random() * valid.length)];
    },
    [],
  );

  const updateTraveler = useCallback(
    (traveler: Traveler, width: number, height: number): boolean => {
      traveler.life++;

      // Move
      switch (traveler.direction) {
        case "right":
          traveler.x += traveler.speed;
          break;
        case "left":
          traveler.x -= traveler.speed;
          break;
        case "down":
          traveler.y += traveler.speed;
          break;
        case "up":
          traveler.y -= traveler.speed;
          break;
      }

      // Distance since last turn
      const distSinceTurn =
        Math.abs(traveler.x - traveler.lastTurnX) +
        Math.abs(traveler.y - traveler.lastTurnY);
      const cellsSinceTurn = Math.floor(distSinceTurn / mergedConfig.cellSize);

      // Check if at grid intersection and ready to turn
      const onGridX =
        Math.abs(traveler.x % mergedConfig.cellSize) < traveler.speed;
      const onGridY =
        Math.abs(traveler.y % mergedConfig.cellSize) < traveler.speed;

      if (
        !traveler.turning &&
        onGridX &&
        onGridY &&
        cellsSinceTurn >= mergedConfig.minStraightDistance
      ) {
        const newDir = pickDirection(traveler.direction);
        if (newDir !== traveler.direction) {
          // Snap to grid for clean turn
          traveler.x =
            Math.round(traveler.x / mergedConfig.cellSize) *
            mergedConfig.cellSize;
          traveler.y =
            Math.round(traveler.y / mergedConfig.cellSize) *
            mergedConfig.cellSize;
          traveler.direction = newDir;
          traveler.lastTurnX = traveler.x;
          traveler.lastTurnY = traveler.y;
        }
      }

      // Kill when the ENTIRE trail is off screen
      let isOffScreen = false;

      switch (traveler.direction) {
        case "right":
          isOffScreen = traveler.x - traveler.length > width;
          break;
        case "left":
          isOffScreen = traveler.x + traveler.length < 0;
          break;
        case "down":
          isOffScreen = traveler.y - traveler.length > height;
          break;
        case "up":
          isOffScreen = traveler.y + traveler.length < 0;
          break;
      }

      if (isOffScreen) return false;

      return true;
    },
    [mergedConfig.cellSize, mergedConfig.minStraightDistance, pickDirection],
  );

  const spawnTraveler = useCallback(
    (width: number, height: number): Traveler => {
      const directions: Traveler["direction"][] = [
        "up",
        "down",
        "left",
        "right",
      ];
      const direction =
        directions[Math.floor(Math.random() * directions.length)];

      let x = 0;
      let y = 0;
      let startX = 0;
      let startY = 0;

      // Spawn ON-SCREEN so trails are visible immediately
      // Head starts somewhere on screen, tail extends behind it (off-screen or on-screen)
      const margin = 50; // distance from edge to spawn head

      switch (direction) {
        case "right":
          // Head starts near left edge, tail extends left (off-screen)
          x = margin + Math.random() * (width * 0.3); // head at 50px to 30% of width
          startX = x - mergedConfig.travelerLength;
          y =
            Math.round((Math.random() * height) / mergedConfig.cellSize) *
            mergedConfig.cellSize;
          startY = y;
          break;
        case "left":
          // Head starts near right edge, tail extends right (off-screen)
          x = width - margin - Math.random() * (width * 0.3);
          startX = x + mergedConfig.travelerLength;
          y =
            Math.round((Math.random() * height) / mergedConfig.cellSize) *
            mergedConfig.cellSize;
          startY = y;
          break;
        case "down":
          // Head starts near top edge, tail extends up (off-screen)
          x =
            Math.round((Math.random() * width) / mergedConfig.cellSize) *
            mergedConfig.cellSize;
          startX = x;
          y = margin + Math.random() * (height * 0.3);
          startY = y - mergedConfig.travelerLength;
          break;
        case "up":
          // Head starts near bottom edge, tail extends down (off-screen)
          x =
            Math.round((Math.random() * width) / mergedConfig.cellSize) *
            mergedConfig.cellSize;
          startX = x;
          y = height - margin - Math.random() * (height * 0.3);
          startY = y + mergedConfig.travelerLength;
          break;
      }

      return {
        x: startX,
        y: startY,
        direction: direction,
        speed: mergedConfig.speed,
        length: mergedConfig.travelerLength,
        opacity: 1,
        life: 0,
        maxLife: 100000,
        lastTurnX: startX,
        lastTurnY: startY,
        turning: false,
      };
    },
    [mergedConfig],
  );

  const drawGrid = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      ctx.strokeStyle = mergedConfig.lineColor;
      ctx.lineWidth = mergedConfig.lineWidth;

      for (let x = 0; x <= width; x += mergedConfig.cellSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y <= height; y += mergedConfig.cellSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    },
    [mergedConfig],
  );

  const drawTraveler = useCallback(
    (ctx: CanvasRenderingContext2D, traveler: Traveler) => {
      let sx = traveler.x;
      let sy = traveler.y;
      let ex = traveler.x;
      let ey = traveler.y;

      // Determine tail start (sx, sy) based on direction
      switch (traveler.direction) {
        case "right":
          ex = traveler.x;
          sx = traveler.x - traveler.length;
          break;
        case "left":
          ex = traveler.x;
          sx = traveler.x + traveler.length;
          break;
        case "down":
          ey = traveler.y;
          sy = traveler.y - traveler.length;
          break;
        case "up":
          ey = traveler.y;
          sy = traveler.y + traveler.length;
          break;
      }

      ctx.save();

      // 1. Create a dynamic gradient from the tail (transparent) to the head (bright)
      const grad = ctx.createLinearGradient(sx, sy, ex, ey);
      grad.addColorStop(0, "rgba(255, 144, 0, 0)"); // Tail is fully transparent
      grad.addColorStop(0.5, "rgba(255, 144, 0, 0.2)"); // Mid-section starts glowing
      grad.addColorStop(1, "rgba(255, 144, 0, 1)"); // Head is solid brightness

      // 2. Draw the main tail
      ctx.beginPath();
      ctx.moveTo(sx, sy);
      ctx.lineTo(ex, ey);
      ctx.strokeStyle = grad;
      ctx.lineWidth = mergedConfig.coreWidth * 2;
      ctx.lineCap = "round";
      ctx.stroke();

      // 3. Draw the bright "core" head
      ctx.beginPath();
      ctx.moveTo(ex, ey);
      ctx.lineTo(ex, ey);
      ctx.strokeStyle = "#ffffff"; // White-hot core
      ctx.lineWidth = mergedConfig.headWidth * 1.5;
      ctx.shadowBlur = 10;
      ctx.shadowColor = mergedConfig.color;
      ctx.stroke();

      ctx.restore();
    },
    [mergedConfig],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const initializeTravelers = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width,
        h = rect.height;

      travelersRef.current = [];
      for (let i = 0; i < 3; i++) {
        const traveler = spawnTraveler(w, h);
        travelersRef.current.push(traveler);
      }
    };

    initializeTravelers();

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width,
        h = rect.height;

      if (w === 0 || h === 0) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, w, h);
      drawGrid(ctx, w, h);

      // Maintain exactly 3 travelers at all times
      while (travelersRef.current.length < 3) {
        const newTraveler = spawnTraveler(w, h);
        travelersRef.current.push(newTraveler);
      }

      // Update and draw all travelers
      const stillAlive: Traveler[] = [];
      for (const traveler of travelersRef.current) {
        const alive = updateTraveler(traveler, w, h);
        if (alive) {
          drawTraveler(ctx, traveler);
          stillAlive.push(traveler);
        }
      }
      travelersRef.current = stillAlive;

      // Bottom fade
      const fadeGrad = ctx.createLinearGradient(
        0,
        h - mergedConfig.fadeHeight,
        0,
        h,
      );
      fadeGrad.addColorStop(0, "rgba(250, 250, 250, 0)");
      fadeGrad.addColorStop(1, mergedConfig.fadeColor);

      ctx.fillStyle = fadeGrad;
      ctx.fillRect(0, h - mergedConfig.fadeHeight, w, mergedConfig.fadeHeight);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [drawGrid, drawTraveler, spawnTraveler, updateTraveler, mergedConfig]);

  return <canvas ref={canvasRef} className={className} style={{ zIndex: 0 }} />;
};

export default AnimatedGridBackground;
