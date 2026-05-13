import { motion, AnimatePresence } from "motion/react";
import { useToastStore } from "../store/toastStore";
import { CheckIcon, InfoIcon, MarkIcon, XIcon } from "../utils/icons";

const typeConfig = {
  success: {
    icon: CheckIcon,
    border: "border-success/20",
    text: "text-success",
    bar: "bg-success",
  },
  error: {
    icon: MarkIcon,
    border: "border-error/20",
    text: "text-error",
    bar: "bg-error",
  },
  info: {
    icon: InfoIcon,
    border: "border-primary/20",
    text: "text-primary",
    bar: "bg-primary",
  },
};

export const ToastContainer = () => {
  const toasts = useToastStore((s) => s.toasts);
  const remove = useToastStore((s) => s.remove);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-9999 flex flex-col gap-3 pointer-events-none">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => {
          const config = typeConfig[toast.type];
          const Icon = config.icon;

          return (
            <motion.div
              key={toast.id}
              layout
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{
                opacity: 0,
                x: 100,
                scale: 0.8,
                transition: { duration: 0.2 },
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
                mass: 0.8,
              }}
              className="pointer-events-auto"
            >
              <div
                className={`
                  relative flex items-start gap-3 min-w-[320px] max-w-[420px]
                  bg-white border ${config.border} rounded-xl shadow-lg overflow-hidden
                `}
              >
                {/* Left accent bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 ${config.bar}`}
                />

                <div className="flex items-start gap-3 p-4 pl-5 w-full">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
                    className={`shrink-0 mt-0.5 ${config.text}`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>

                  <p className="text-sm text-text-primary flex-1 leading-5">
                    {toast.message}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => remove(toast.id)}
                    className="shrink-0 text-text-secondary hover:text-text-primary transition-colors"
                  >
                    <XIcon className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
