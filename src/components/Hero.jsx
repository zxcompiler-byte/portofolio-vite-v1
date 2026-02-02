import { motion } from "framer-motion";

export default function Hero({ onContact }) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-20 overflow-hidden pt-20">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* BAGIAN KIRI: TEKS */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-secondary text-lg lg:text-xl font-medium mb-2">
            Halo Brother! 👋 Saya,
          </h2>

          <h1 className="text-3xl lg:text-7xl font-bold text-primary mb-4 leading-tight">
            FAJAR&nbsp;
            <span className="text-accent">ARDIANSYAH</span>
          </h1>

          <p className="text-secondary text-base lg:text-lg max-w-lg mb-8 leading-relaxed">
            Seorang{" "}
            <span className="text-primary font-semibold">
              Information Technology Student
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
            yang memiliki fokus mendalam pada{" "}
            <span className="text-primary font-semibold">
              Frontend Development
            </span>
            . Saya senang membangun antarmuka web yang modern, cepat, dan
            intuitif, menggabungkan teori kampus dengan implementasi teknologi
            terkini seperti React & Tailwind.
          </p>

          <div className="flex gap-4">
            <button
              onClick={onContact}
              className="cursor-pointer bg-accent text-background font-bold px-8 py-3 rounded-full hover:brightness-110 transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)]"
            >
              Let's Talk 🚀
            </button>

            <button className="cursor-pointer border border-secondary text-primary px-8 py-3 rounded-full hover:border-accent hover:text-accent transition-all">
              Lihat Karya
            </button>
          </div>
        </motion.div>

        {/* BAGIAN KANAN: GAMBAR MONSTER */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          {/* Langsung panggil img tanpa pembungkus glow yang bikin kotak */}
          <motion.img
            src="/home-image.png"
            alt="Monster Avatar"
            // drop-shadow dihilangkan agar tidak ada bias kotak di background
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
