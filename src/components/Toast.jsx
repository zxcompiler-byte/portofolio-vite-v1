import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Toast({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const isError = type === "error";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      className={`fixed bottom-8 right-8 z-60 flex items-center gap-4 px-6 py-4 rounded-xl shadow-2xl border min-w-75 backdrop-blur-md ${
        isError
          ? "bg-surface border-red-500/50" // ERROR
          : "bg-surface border-accent/50 text-accent" // SUCCESS
      }`}
    >
      {/* ICON */}
      <div
        className={`p-2 rounded-full ${isError ? "bg-red-500" : "bg-accent/10"}`}
      >
        {isError ? (
          // ICON ERROR
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // ICON SUCCESS
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>

      {/* TEXT CONTENT */}
      <div className="flex flex-col">
        <span className="font-bold text-sm uppercase tracking-wider opacity-80">
          {isError ? "Gagal" : "Berhasil"}
        </span>
        <span className="text-sm font-medium text-primary">{message}</span>
      </div>

      {/* CLOSE BUTTON */}
      <button
        onClick={onClose}
        className="ml-auto text-secondary hover:text-primary transition-colors"
      >
        X
      </button>
    </motion.div>
  );
}
