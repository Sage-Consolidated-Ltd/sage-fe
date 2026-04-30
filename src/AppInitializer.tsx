// src/AppInitializer.tsx
import React, { useEffect, useState } from "react";
import SplashScreen from "./components/splash/SplashScreen";
import AppRoutes from "./routes/AppRoutes";

const AppInitializer: React.FC = () => {
  const [isReady, setIsReady] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const init = async () => {
      await Promise.all([
        // preload auth, config, etc.
        new Promise((r) => setTimeout(r, 3000)),
      ]);
      setIsReady(true);
    };
    init();
  }, []);

  return (
    <>
      {showSplash && (
        <SplashScreen
          isLoading={!isReady}
          minDuration={2000}
          onComplete={() => setShowSplash(false)}
        />
      )}
      <div className={showSplash ? "invisible" : "visible"}>
        <AppRoutes />
      </div>
    </>
  );
};

export default AppInitializer;
