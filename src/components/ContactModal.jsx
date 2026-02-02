import Toast from "./Toast";
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
  const [toast, setToast] = useState(null);
  const [showWa, setShowWa] = useState(false);

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

    // KEY EMAILJS
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
          setToast({
            type: "success",
            message:
              "Pesan berhasil dikirim! Terima kasih sudah menghubungi saya.",
          });
          formRef.current.reset();
          nameRef.current.focus();
        },
        (error) => {
          setIsLoading(false);
          console.error("EmailJS Error:", error);
          setToast({
            type: "error",
            message:
              "Gagal mengirim pesan. Silakan coba lagi atau hubungi saya melalui WhatsApp.",
          });
          setShowWa(true);
        },
      );
  };

  //  LOGIC 3: HANDLE WHATSAPP
  const handleWa = () => {
    const name = nameRef.current.value;
    const msg = messageRef.current.value;
    const Text = `Halo, Saya ${name}. \n\nIsi Pesan: ${msg}`;
    window.open(
      `https://wa.me/628131729361?text=${encodeURIComponent(Text)}`,
      "_blank",
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

              <form
                ref={formRef}
                onSubmit={handleSend}
                className="flex flex-col gap-4"
              >
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
                        submitRef.current.focus();
                        handleSend();
                      }
                    }}
                  ></textarea>
                </div>

                {/* Tombol Kirim */}
                <button
                  ref={submitRef}
                  type="submit"
                  disabled={isLoading}
                  className={`bg-accent text-background font-bold py-3 rounded-lg hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-accent/50 transition-all mt-2 cursor-pointer ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? "Mengirim..." : "KIRIM PESAN 🚀"}
                </button>

                <AnimatePresence>
                  {showWa && (
                    <motion.button
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      type="button"
                      onClick={handleWa}
                      className="bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition-all flex justify-center items-center gap-2 mt-2"
                    >
                      {/* Ikon WA (SVG) */}
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      KIRIM MANUAL VIA WHATSAPP 📲
                    </motion.button>
                  )}
                </AnimatePresence>
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

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </AnimatePresence>
  );
}
