import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { formContentVariants } from "../../../utils/variants";
import Input from "../../props/Input";
import Button from "../../props/Button";
import { getImageSrc } from "../../../utils/imageUtils";
import { LogoText } from "../../../utils/icons";
import AuthFooter from "../AuthFooter";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password, keepLoggedIn });
  };

  return (
    <div className="min-h-screen h-full flex p-4">
      {/* Left Side - Login Form */}
      <div className="w-full flex flex-col justify-between px-6 sm:px-12 lg:px-20 py-8 bg-white">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={getImageSrc("logo.svg")} alt="Sage" className="h-8 w-8" />
          <span className="text-xl font-semibold text-text-primary">SAGE</span>
        </div>

        {/* Login Form */}
        <div className="flex-1 flex items-center justify-center w-full max-w-md mx-auto">
          <motion.div
            variants={formContentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full"
          >
            <div className="mb-8">
              <h1 className="text-3xl font-semibold text-text-primary mb-2">
                Welcome back to Sage
              </h1>
              <p className="text-text-secondary">
                Your command center for autonomous cybersecurity.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
              <Input
                name="email"
                type="email"
                label="Email address"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <div className="relative">
                <Input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={keepLoggedIn}
                    onChange={(e) => setKeepLoggedIn(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-text-secondary">
                    Keep me logged in
                  </span>
                </label>
                <a
                  href="#"
                  className="text-sm text-primary hover:underline font-medium"
                >
                  Forgot password?
                </a>
              </div>

              <Button type="submit" className="w-full mt-2">
                LOGIN
              </Button>

              {/* Divider */}
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-text-secondary">or</span>
                </div>
              </div>

              {/* SSO Buttons */}
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-200 rounded-xl text-text-primary hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm font-medium">Continue with Azure</span>
              </button>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-200 rounded-xl text-text-primary hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm font-medium">
                  Continue with Google
                </span>
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <AuthFooter single={false} />
      </div>

      {/* Right Side - Hero Image */}
      <div className="hidden lg:block w-full relative bg-black">
        <div className="absolute inset-0">
          {/* Background Image */}
          <img
            src={getImageSrc("login-hero.jpg")}
            alt="Cybersecurity Shield"
            className="w-full h-full object-cover opacity-90"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
          <div className="flex items-center gap-2 mb-6">
            <img src={getImageSrc("logo.svg")} alt="Sage" className="h-6 w-6" />
            <span className="text-lg font-semibold">SAGE</span>
          </div>
          <h2 className="text-4xl font-bold leading-tight mb-4">
            PROTECT WHAT
            <br />
            MATTERS. PREDICT
            <br />
            WHAT'S NEXT.
          </h2>
          <p className="text-lg text-gray-300 max-w-md">
            Sage AI, investigates, and stops threats — before you even notice
            them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
