import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaDatabase,
  FaHtml5,
  FaCss3,
  FaJava,
  FaBootstrap,
  FaAngular,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiDotnet,
  SiJavascript,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend Development",
    items: [
        { name: "HTML", level: "100%", icon: <FaHtml5 />, color: "text-red-400" },
        { name: "CSS#", level: "90%", icon: <FaCss3 />, color: "text-blue-400" },
        { name: "JavaScript", level: "85%", icon: <FaJava />, color: "text-yellow-400" },
        { name: "Bootstrap", level: "100%", icon: <FaBootstrap />, color: "text-purple-400" },
         { name: "Angular", level: "85%", icon: <FaAngular />, color: "text-red-800" },
      { name: "React", level: "95%", icon: <FaReact />, color: "text-cyan-400" },
      { name: "Tailwind CSS", level: "90%", icon: <SiTailwindcss />, color: "text-cyan-300" },
      { name: "JavaScript", level: "90%", icon: <SiJavascript />, color: "text-yellow-400" },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", level: "90%", icon: <FaNodeJs />, color: "text-green-400" },
      { name: "Express.js", level: "90%", icon: <SiExpress />, color: "text-white" },
      { name: ".NET / ASP.NET", level: "85%", icon: <SiDotnet />, color: "text-purple-400" },
    ],
  },
  {
    category: "Database & Cloud",
    items: [
      { name: "MongoDB", level: "90%", icon: <SiMongodb />, color: "text-green-500" },
      { name: "SQL Server", level: "85%", icon: <FaDatabase />, color: "text-blue-400" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: "95%", icon: <FaGitAlt />, color: "text-orange-400" },
      { name: "Docker", level: "75%", icon: <FaDocker />, color: "text-blue-400" },
    ],
  },
];

const SkillItem = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      duration: 0.5,
      delay: index * 0.1,
    }}
    viewport={{ once: true }}
  >
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-4">
        <motion.span
          whileHover={{ scale: 1.2, rotate: 10 }}
          className={`text-3xl ${skill.color}`}
        >
          {skill.icon}
        </motion.span>
        <span className="text-white font-semibold">{skill.name}</span>
      </div>
      <span className="text-emerald-400">{skill.level}</span>
    </div>

    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: skill.level }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
        viewport={{ once: true }}
        className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
      />
    </div>
  </motion.div>
);

const SkillCard = ({ group, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.6,
      delay: index * 0.15,
    }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl hover:border-emerald-400 transition duration-300"
  >
    <h2 className="text-2xl font-bold text-emerald-400 mb-8">
      {group.category}
    </h2>

    <div className="space-y-7">
      {/* ✅ Fixed: maps through group.items and renders SkillItem */}
      {group.items.map((skill, idx) => (
        <SkillItem key={idx} skill={skill} index={idx} />
      ))}
    </div>
  </motion.div>
);

const Skills = () => (
  <section className="py-24 px-6 relative overflow-hidden">
    {/* Background Glow */}
    <div className="absolute right-0 top-20 w-80 h-80 bg-emerald-500/20 blur-[120px] rounded-full" />

    <div className="max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          My <span className="text-emerald-400">Skills</span>
        </h1>
        <p className="text-gray-400 mt-5 text-lg">
          Technologies I use to build modern applications
        </p>
        <div className="w-20 h-1 bg-emerald-400 mx-auto mt-5 rounded-full" />
      </motion.div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {skills.map((group, index) => (
          <SkillCard key={index} group={group} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;