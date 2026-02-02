import { motion } from "framer-motion";

export default function Hero({ onContact }) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-20 overflow-hidden pt-2 lg:pt-20">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* BAGIAN KIRI: TEKS & BIO */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-secondary text-lg lg:text-xl font-medium mb-2 text-center lg:text-left">
            Halo! 👋 Saya,
          </h2>

          <h1 className="text-3xl lg:text-6xl text-center lg:text-left font-bold text-primary mb-4 leading-tight">
            FAJAR
            <br />
            <span className="text-accent">ARDIANSYAH</span>
          </h1>

          <p className="text-secondary text-[14px] lg:text-lg text-center lg:text-left max-w-lg mb-8 leading-relaxed">
            Mahasiswa{" "}
            <span className="text-primary font-semibold">
              Teknik Informatika
            </span>{" "}
            di{" "}
            <a
              href="https://www.unucirebon.ac.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-bold hover:underline decoration-2 underline-offset-4 transition-all"
            >
              Universitas Nahdlatul Ulama Cirebon
            </a>{" "}
            dengan spesialisasi pada{" "}
            <span className="text-primary font-semibold">
              Frontend Development
            </span>
            . Saya memadukan logika kode dan estetika desain untuk menciptakan
            website yang {""}
            <span className="text-primary font-semibold">
              cepat, responsif, dan user-friendly
            </span>
            .
          </p>

          {/* TOMBOL CTA */}
          <div className="flex gap-2 lg:gap-4 justify-center lg:justify-start text-[14px] lg:text-base">
            <button
              onClick={onContact}
              className="cursor-pointer bg-accent text-background font-bold px-2 lg:px-8 py-3 rounded-full hover:brightness-110 transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)]"
            >
              Let's Collaborate 🚀
            </button>

            <button className="cursor-pointer border border-secondary text-primary px-4 lg:px-8 py-3 rounded-full hover:border-accent hover:text-accent transition-all">
              Lihat Karya
            </button>
          </div>
        </motion.div>

        {/* BAGIAN KANAN: GAMBAR & ANIMASI */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.img
            src="/home-image.png"
            alt="Monster Avatar"
            className="w-64 lg:w-96 transition-all duration-300 cursor-pointer hover:scale-105 hover:rotate-2"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
