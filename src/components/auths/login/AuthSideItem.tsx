// src/components/auth/AuthHero.tsx
import { motion } from "motion/react";
import { LogoIcon } from "../../../utils/icons";
import { getImageSrc } from "../../../utils/imageUtils";

interface AuthHeroProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  paragraph: string;
}

const AuthSideItem = ({
  imageSrc,
  imageAlt,
  title,
  paragraph,
}: AuthHeroProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 bg-[#321C1F]"
    >
      {/* Background Image */}
      <img
        src={getImageSrc(imageSrc)}
        alt={imageAlt}
        className={`w-full h-full object-cover ${imageSrc === "loginImg.png" ? "" : "mix-blend-luminosity"} opacity-80`}
      />

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 ${imageSrc === "loginImg.png" ? "authside-gradient" : "mfa-gradient"}`}
      />

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-[34px] text-white">
        <div className="flex items-center gap-2 mb-4">
          <LogoIcon className="w-5 h-[23.22px]" />
          <span className="text-xl text-selection">SAGE</span>
        </div>
        <h2 className="text-4xl xl:text-[60px] xl:leading-[120%] mb-4">
          {title}
        </h2>
        <p className="text-xl text-white max-w-xl">{paragraph}</p>
      </div>
    </motion.div>
  );
};

export default AuthSideItem;
