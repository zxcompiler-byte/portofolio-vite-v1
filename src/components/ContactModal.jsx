import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactModal({ isOpen, onClose }) {
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const submitRef = useRef(null);
  const formRef = useRef(null);

  // LOGIC ENTER TO NEXT INPUT
  const handleEnter = (e, targetRef) => {
    if (e.key === "Enter") {
      e.preventDefault();
      targetRef.current.focus();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 1. BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex justify-center items-center p-4"
          >
            {/* 2. KOTAK MODAL */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-surface border-2 border-accent p-6 lg:p-8 rounded-2xl w-full max-w-md shadow-2xl relative"
            >
              {/* JUDUL */}
              <h3 className="text-2xl font-bold text-accent mb-2">
                Let's Connect! 🚀
              </h3>
              <p className="text-secondary text-sm mb-6">
                Punya project seru? Ayo kita diskusikan!
              </p>

              {/* FORM */}
              <form ref={formRef} className="flex flex-col gap-4">
                {/* Input Nama */}
                <div>
                  <label className="text-xs font-bold text-secondary uppercase tracking-wide">
                    Nama
                  </label>
                  <input
                    type="text"
                    className="w-full mt-1 p-3 rounded-lg bg-background/50 border border-primary/10 focus:border-accent text-primary outline-none transition-colors"
                    placeholder="Nama lengkap"
                    onKeyDown={(e) => handleEnter(e, emailRef)}
                    autoFocus
                  />
                </div>

                {/* Input Email */}
                <div>
                  <label className="text-xs font-bold text-secondary uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    ref={emailRef}
                    type="email"
                    className="w-full mt-1 p-3 rounded-lg bg-background/50 border border-primary/10 focus:border-accent text-primary outline-none transition-colors"
                    placeholder="email@contoh.com"
                    onKeyDown={(e) => handleEnter(e, messageRef)}
                  />
                </div>

                {/* Input Pesan */}
                <div>
                  <label className="text-xs font-bold text-secondary uppercase tracking-wide">
                    Pesan
                  </label>
                  <textarea
                    ref={messageRef}
                    rows="4"
                    className="w-full mt-1 p-3 rounded-lg bg-background/50 border border-primary/10 focus:border-accent text-primary outline-none resize-none transition-colors"
                    placeholder="Tulis pesanmu disini..."
                    // LOGIC ENTER TO SUBMIT
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
                        e.preventDefault();
                        submitRef.current.click();
                        submitRef.current.focus();
                      }
                    }}
                  ></textarea>
                </div>

                {/* Tombol Kirim */}
                <button
                  ref={submitRef}
                  type="button"
                  className="bg-accent text-background font-bold py-3 rounded-lg hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-accent/50 transition-all mt-2 cursor-pointer"
                  onClick={() => {
                    alert("Wih! Tombol terpencet via Ctrl+Enter! 🚀");
                    formRef.current.reset();
                  }}
                >
                  KIRIM PESAN 🚀
                </button>
              </form>

              {/* Tombol Close */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-secondary hover:text-primary transition-colors cursor-pointer"
              >
                ✖
              </button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
