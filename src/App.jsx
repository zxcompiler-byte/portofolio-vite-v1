import { motion } from "framer-motion";
import Card from "./components/Card";

export default function App() {
  // 1. Logic untuk WADAH (Grid)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Jeda 0.3 detik antar kartu (Antrian)
      },
    },
  };

  // 2. Logic untuk ITEM (Kartu)
  const itemVariants = {
    hidden: { opacity: 0, y: 100 }, // Awal: Hilang & Posisi agak di bawah
    visible: {
      opacity: 1,
      y: 0, // Akhir: Muncul & Posisi normal
      transition: {
        duration: 0.8, // Durasi gerak (makin besar makin pelan/elegan)
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 md:p-8">
      {/* WADAH UTAMA diganti jadi motion.div 
         Kita pasang logic 'initial' (kondisi awal) dan 'animate' (tujuan akhir) di sini
      */}
      <motion.div
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* SEMUA CARD di bawah otomatis ngikutin perintah wadah.
           Kita cuma perlu tempel 'variants={itemVariants}' biar dia tau cara geraknya.
        */}

        {/* PROFILE CARD */}
        <Card
          variants={itemVariants}
          className="md:col-span-2 flex items-center gap-6"
        >
          <div className="relative shrink-0">
            <img
              src="./public/profile-home.jpg"
              alt="Profile"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-accent object-cover shadow-2xl"
            />
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-black rounded-full"></span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-secondary text-xs font-bold tracking-widest uppercase">
              Information Technology students
            </span>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Fajar Ardiansyah
            </h1>
            <p className="text-secondary">
              Creator of{" "}
              <span className="text-accent font-bold tracking-wide">
                zxcompiler
              </span>
            </p>
          </div>
        </Card>

        {/* STATUS CARD */}
        <Card
          variants={itemVariants}
          className="flex flex-col justify-center p-6 gap-3"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <h2 className="text-secondary text-xs font-bold tracking-widest uppercase">
              Current Focus
            </h2>
          </div>
          <p className="text-xl font-bold text-primary leading-tight">
            Building high-performance web with{" "}
            <span className="text-accent">React</span> &{" "}
            <span className="text-accent">Tailwind</span>.
          </p>
        </Card>

        {/* TECH STACK CARD */}
        <Card
          variants={itemVariants}
          className="md:col-span-3 p-6 flex flex-col justify-center"
        >
          <h2 className="text-secondary text-xs font-bold tracking-widest uppercase mb-4">
            Tech Arsenal
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "React.js",
              "Vite",
              "Tailwind CSS v4",
              "Framer Motion",
              "JavaScript",
              "Git",
            ].map((tech) => (
              <span
                key={tech}
                className="
                            px-4 py-2 
                            rounded-lg 
                            bg-zinc-800/50 
                            border border-zinc-700 
                            text-zinc-300 text-sm font-medium
                            hover:border-accent hover:text-accent 
                            transition-colors duration-300 cursor-default
                        "
              >
                {tech}
              </span>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
