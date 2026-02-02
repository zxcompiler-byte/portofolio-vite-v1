import { useState } from "react";
import { FiGithub, FiInstagram, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import Card from "./components/Card";
import ContactModal from "./components/ContactModal";
import Hero from "./components/Hero";

export default function App() {
  const [selectedId, setSelectedId] = useState(null);

  // 1. LOGIC UNTUK CONTAINER
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // 2. LOGIC UNTUK ITEM (CARD)
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // 3. LOGIC UNTUK ICON (SOCIAL LINK)
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
    {
      id: 3,
      icon: <FiMail size={24} />,
      label: "Email",
      action: "contact",
    },
  ];

  // 4. DATA PROJECT
  const projects = [
    {
      id: 1,
      title: "Organization Official Website",
      desc: "Sistem informasi organisasi dengan Admin Panel untuk manajemen konten berita dan anggota.",
      tech: ["Tailwind CSS", "Firebase", "Supabase"],
      link: "https://btmfilkom.vercel.app/",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Personal Portofolio",
      desc: "Personal branding website dengan gaya Bento Grid yang modern dan performa tinggi.",
      tech: ["React", "Tailwind V4", "Framer Motion"],
      link: "https://zxcompiler.netlify.app/",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <div className="flex flex-col  items-center min-h-screen bg-background px-4 lg:px-0">
      <div className="max-w-6xl w-full flex flex-col gap-10 lg:gap-20 pb-20">
        <Hero onContact={() => setSelectedId("contact")} />

        {/* === PROFILE CARD === */}
        <motion.div
          className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Card
            variants={itemVariants}
            className="lg:col-span-2 flex items-center gap-6 p-8"
          >
            <div className="relative shrink-0">
              <img
                src="/profile-home.png"
                alt="Profile"
                className="w-20 h-20 lg:w-32 lg:h-32 rounded-full border-4 border-primary/5 object-cover shadow-2xl"
              />
              <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-background rounded-full animate-pulse"></span>
            </div>

            <div className="flex flex-col gap-1 lg:gap-2">
              <span className="text-secondary text-[10px] lg:text-xs font-bold tracking-widest uppercase">
                Information Technology Student
              </span>
              <h1 className="text-2xl lg:text-4xl font-bold leading-tight">
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

          {/* === STATUS CARD === */}
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

          {/* === TECH STACK CARD === */}
          <Card
            variants={itemVariants}
            className="lg:col-span-3 p-6 flex flex-col justify-center"
          >
            <h2 className="text-secondary text-xs font-bold tracking-widest uppercase mb-4">
              Tech Arsenal
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "React.js",
                "Vite",
                "Tailwind CSS",
                "Framer Motion",
                "JavaScript",
                "Python",
                "Firebase",
                "Git",
                "Github",
              ].map((tech) => (
                <span
                  key={tech}
                  className="
                  px-3 py-2 lg:px-4 lg:py-2 
                  rounded-lg 
                  bg-surface 
                  border border-white/10 
                  text-secondary text-xs lg:text-sm font-medium
                  hover:border-accent hover:text-accent 
                  transition-colors duration-300 cursor-default
                "
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>

          {/* === PROJECT SECTION === */}
          <Card
            variants={itemVariants}
            className="lg:col-span-3 p-6 flex flex-col gap-6"
          >
            <h2 className="text-secondary text-xs font-bold tracking-widest uppercase">
              Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project) => (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  className="group relative p-5 rounded-xl bg-surface border border-white/10 hover:border-accent/50 transition-all duration-300 overflow-hidden"
                >
                  {/* HIASAN GRADASI (GLOW) */}
                  <div
                    className={`absolute top-0 right-0 w-24 h-24 bg-linear-to-br ${project.color} opacity-10 blur-2xl rounded-full group-hover:opacity-20 transition-all duration-500`}
                  ></div>

                  {/* CONTENT */}
                  <div className="relative z-10 flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-secondary line-clamp-2 leading-relaxed">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-1 rounded bg-white/5 text-zinc-400 border border-white/5"
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

          {/* === SOCIAL LINKS === */}
          <Card variants={itemVariants} className="lg:col-span-3 p-6">
            <div className="flex flex-wrap gap-3 lg:gap-4 justify-center">
              {socialLinks.map((social) => (
                <button
                  key={social.id}
                  onClick={() =>
                    social.action
                      ? setSelectedId(social.action)
                      : window.open(social.href, "_blank")
                  }
                  className="
                  flex items-center gap-2 
                  px-4 py-2 lg:px-6 lg:py-3 
                  text-sm lg:text-base 
                  rounded-lg 
                  bg-surface border border-white/10 
                  text-primary 
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

      {/* CONTACT  */}
      <ContactModal
        isOpen={selectedId === "contact"}
        onClose={() => setSelectedId(null)}
      />
    </div>
  );
}
