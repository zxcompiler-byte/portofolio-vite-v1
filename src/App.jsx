import { useState } from "react";
import { FiGithub, FiInstagram, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import Card from "./components/Card";
import ContactModal from "./components/ContactModal";
import Hero from "./components/Hero";

export default function App() {
  const [selectedId, setSelectedId] = useState(null);

  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // --- DATA ---
  const socialLinks = [
    {
      id: 1,
      icon: <FiGithub size={24} />,
      href: "https://github.com/zxcompiler-byte",
      label: "Github",
    },
    {
      id: 2,
      icon: <FiInstagram size={24} />,
      href: "https://www.instagram.com/ardiansyahfajarrr_",
      label: "Instagram",
    },
    { id: 3, icon: <FiMail size={24} />, label: "Email", action: "contact" },
  ];

  const projects = [
    {
      id: 1,
      title: "Organization Official Website",
      desc: "Platform digital modern untuk manajemen informasi organisasi. Dibangun dengan arsitektur yang scalable untuk pengelolaan berita dan data anggota secara real-time.",
      tech: ["Tailwind CSS", "Firebase", "Supabase"],
      link: "https://btmfilkom.vercel.app/",
      image: "/project-satu.png",
    },
    {
      id: 2,
      title: "Interactive Personal Portfolio",
      desc: "Showcase profesional dengan desain Bento Grid yang estetis. Mengoptimalkan performa tinggi dan animasi interaktif untuk pengalaman pengguna yang memukau.",
      tech: ["React", "Tailwind V4", "Framer Motion"],
      link: "https://zxcompiler.netlify.app/",
      image: "/project-dua.png",
    },
  ];

  const techStack = [
    "React.js",
    "Vite",
    "Tailwind CSS",
    "Framer Motion",
    "JavaScript",
    "Python",
    "Firebase",
    "Git",
    "Github",
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-background px-4 lg:px-0">
      <div className="max-w-6xl w-full flex flex-col gap-10 lg:gap-20 pb-20">
        {/* HERO SECTION */}
        <Hero onContact={() => setSelectedId("contact")} />

        {/* BENTO GRID */}
        <motion.div
          id="projects"
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* 1. PROFILE CARD */}
          <Card
            variants={itemVariants}
            className="lg:col-span-2 flex flex-col sm:flex-row items-center gap-6 p-6 lg:p-8 text-center sm:text-left"
          >
            <div className="relative shrink-0">
              <img
                src="/profile-home.png"
                alt="Profile"
                className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-primary/5 object-cover shadow-2xl"
              />
              <span className="absolute bottom-0 -right-1.25 lg:bottom-2 lg:-right-1.25 w-5 h-5 bg-green-500 border-4 border-surface rounded-full animate-pulse"></span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-secondary text-[10px] lg:text-xs font-bold tracking-widest uppercase">
                Information Technology Student
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
                Fajar Ardiansyah
              </h1>
              <p className="text-secondary text-sm lg:text-base">
                Creator of{" "}
                <span className="text-accent font-bold tracking-wide">
                  zxcompiler
                </span>
              </p>
            </div>
          </Card>

          {/* 2. STATUS CARD */}
          <Card
            variants={itemVariants}
            className="flex flex-col justify-center p-6 gap-3"
          >
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <h2 className="text-secondary text-xs font-bold tracking-widest uppercase">
                Current Focus
              </h2>
            </div>
            <p className="text-lg lg:text-xl font-bold text-primary leading-tight text-center lg:text-left">
              Crafting scalable web apps & mastering the{" "}
              <span className="text-accent">React</span> &{" "}
              <span className="text-accent">Ecosystem</span>.
            </p>
          </Card>

          {/* 3. TECH STACK (MARQUEE) */}
          <Card
            variants={itemVariants}
            className="lg:col-span-3 p-6 flex flex-col justify-center overflow-hidden"
          >
            <h2 className="text-secondary text-xs font-bold tracking-widest uppercase mb-6 text-center lg:text-left">
              Tech Arsenal
            </h2>

            <div className="relative w-full overflow-hidden mask-image-linear-gradient">
              <motion.div
                className="flex w-max"
                animate={{ x: "-50%" }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
              >
                {[...techStack, ...techStack, ...techStack, ...techStack].map(
                  (tech, index) => (
                    <span
                      key={index}
                      className="
                      mr-4 px-4 py-3 rounded-lg 
                      bg-surface border border-white/10 
                      text-secondary text-sm font-medium whitespace-nowrap 
                      hover:border-accent hover:text-accent 
                      active:border-accent active:text-accent active:scale-95
                      transition-all duration-200 cursor-default select-none
                    "
                    >
                      {tech}
                    </span>
                  ),
                )}
              </motion.div>
            </div>
          </Card>

          {/* 4. FEATURED PROJECTS */}
          <Card
            variants={itemVariants}
            className="lg:col-span-3 p-6 flex flex-col gap-6"
          >
            <h2 className="text-secondary text-xs lg:text-sm text-center lg:text-leftfont-bold tracking-widest uppercase">
              Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project) => (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-video rounded-xl overflow-hidden bg-surface border border-primary/10 hover:border-accent/50 transition-all duration-300 text-center lg:text-left"
                >
                  {/* BG IMAGE */}
                  <div
                    className="absolute inset-0 bg-cover bg-top transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>

                  {/* OVERLAY GELAP */}
                  <div className="absolute inset-0 bg-linear-to-t from-background via-background/70 to-transparent opacity-90 transition-opacity"></div>

                  {/* CONTENT TEXT */}
                  <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col gap-2 translate-y-0 lg:translate-y-2 lg:group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-[14px] lg:text-xl font-extrabold lg:font-bold text-accent lg:text-primary group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[10px] lg:text-sm text-secondary line-clamp-2 leading-relaxed opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2  justify-center lg:justify-start">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-1 rounded bg-surface/50 text-secondary backdrop-blur-md border border-primary/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </Card>

          {/* 5. SOCIAL LINKS */}
          <Card variants={itemVariants} className="lg:col-span-3 p-6">
            <div className="flex flex-wrap gap-2 lg:gap-4 justify-center">
              {socialLinks.map((social) => (
                <button
                  key={social.id}
                  onClick={() =>
                    social.action
                      ? setSelectedId(social.action)
                      : window.open(social.href, "_blank")
                  }
                  className="
                    flex items-center gap-2 p-2 lg:px-6 lg:py-3 
                    text-[10px] lg:text-base rounded-lg 
                    bg-surface border border-white/10 text-primary 
                    hover:border-accent hover:text-accent 
                    transition-all duration-300 cursor-pointer
                  "
                >
                  {social.icon}
                  <span className="font-bold">{social.label}</span>
                </button>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* MODAL */}
      <ContactModal
        isOpen={selectedId === "contact"}
        onClose={() => setSelectedId(null)}
      />

      <footer className="text-center text-secondary text-xs py-8">
        © {new Date().getFullYear()}{" "}
        <span className="text-accent font-bold">Fajar Ardiansyah</span>. All
        rights reserved.
      </footer>
    </div>
  );
}
