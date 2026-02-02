import { useRef, useState } from "react";
import emailJs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactModal({ isOpen, onClose }) {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const submitRef = useRef(null);
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  // LOGIC 1: ENTER TO NEXT INPUT
  const handleEnter = (e, targetRef) => {
    if (e.key === "Enter") {
      e.preventDefault();
      targetRef.current.focus();
    }
  };

  // LOGIC 2: VALIDASI & KIRIM
  const handleSend = (e) => {
    if (e) e.preventDefault();

    if (!formRef.current.checkValidity()) {
      formRef.current.reportValidity();
      return;
    }

    setIsLoading(true);

    emailJs
      .sendForm(
        "service_1h2tigm", // ID Service
        "template_1j5vd1n", // ID Template
        formRef.current,
        "Jzo3cA6PChURKZPqw", // Public Key
      )
      .then(
        () => {
          setIsLoading(false);
          alert("Pesan berhasil dikirim! 🚀");
          formRef.current.reset();
          nameRef.current.focus();
        },
        (error) => {
          setIsLoading(false);
          console.error("EmailJS Error:", error);
          alert("Gagal mengirim pesan. Cek Console untuk detail.");
        },
      );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex justify-center items-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-surface border-2 border-accent p-6 lg:p-8 rounded-2xl w-full max-w-md shadow-2xl relative"
            >
              <h3 className="text-2xl font-bold text-accent mb-2">
                Let's Connect! 🚀
              </h3>
              <p className="text-secondary text-sm mb-6">
                Punya project seru? Ayo kita diskusikan!
              </p>

              <form ref={formRef} className="flex flex-col gap-4">
                {/* Input Nama */}
                <div>
                  <label className="text-xs font-bold text-secondary uppercase tracking-wide">
                    Nama
                  </label>
                  <input
                    name="user_name"
                    ref={nameRef}
                    type="text"
                    className="w-full mt-1 p-3 rounded-lg bg-background/50 border border-primary/10 focus:border-accent text-primary outline-none transition-colors"
                    placeholder="Nama lengkap"
                    onKeyDown={(e) => handleEnter(e, emailRef)}
                    autoFocus
                    required
                  />
                </div>

                {/* Input Email */}
                <div>
                  <label className="text-xs font-bold text-secondary uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    name="user_email"
                    ref={emailRef}
                    type="email"
                    className="w-full mt-1 p-3 rounded-lg bg-background/50 border border-primary/10 focus:border-accent text-primary outline-none transition-colors"
                    placeholder="email@contoh.com"
                    onKeyDown={(e) => handleEnter(e, messageRef)}
                    required
                  />
                </div>

                {/* Input Pesan */}
                <div>
                  <label className="text-xs font-bold text-secondary uppercase tracking-wide">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    ref={messageRef}
                    rows="4"
                    className="w-full mt-1 p-3 rounded-lg bg-background/50 border border-primary/10 focus:border-accent text-primary outline-none resize-none transition-colors"
                    placeholder="Tulis pesanmu disini..."
                    required
                    // LOGIC ENTER TO SUBMIT
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                  ></textarea>
                </div>

                {/* Tombol Kirim */}
                <button
                  ref={submitRef}
                  type="button"
                  onClick={handleSend}
                  disabled={isLoading}
                  className={`bg-accent text-background font-bold py-3 rounded-lg hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-accent/50 transition-all mt-2 cursor-pointer ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? "Mengirim..." : "KIRIM PESAN 🚀"}
                </button>
              </form>

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
