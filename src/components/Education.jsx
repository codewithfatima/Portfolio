import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const educationData = [
    {
        title: "Bachelor's in Software Engineering",
        place: "Virtual University of Pakistan",
        year: "2020 - 2024",
        desc: "Studied software engineering fundamentals, algorithms, databases, software design, and full-stack web development. Completed academic and practical projects."
    },
    {
        title: "Higher Secondary Education",
        place: "Pakistan School Salmiya, Kuwait",
        year: "2019 - 2020"
    },
    {
        title: "Secondary Education",
        place: "Pakistan School Salmiya, Kuwait",
        year: "2018 - 2019"
    }
];

const experienceData = [
    {
        title: "Full Stack Developer",
        place: "Arab Technologies Company — Kuwait",
        year: "April 2025 - Present",
        desc: "Developing and maintaining enterprise applications using .NET technologies and Angular. Creating responsive interfaces, implementing new features, optimizing SQL queries, stored procedures, and working with IIS server deployments."
    },
    {
        title: "QA Engineer / .NET Developer",
        place: "KuwaitNET Company — Kuwait",
        year: "Experience",
        desc: "Performed end-to-end testing to validate applications against legacy VB6 systems. Created test cases using Azure DevOps, managed SQL Server operations, performed data validation, bug reporting, and supported .NET based applications."
    },
    {
        title: "MERN Stack Developer",
        place: "Sidra International Company — Kuwait",
        year: "Aug 2025 - Oct 2025",
        desc: "Developed bilingual Arabic/English corporate websites using MERN stack. Built secure admin panels, implemented role-based access control, responsive UI designs, and optimized website performance."
    },
    {
        title: "MERN Stack Developer Intern",
        place: "Buggcy IT Company — Pakistan",
        year: "June 2025 - Aug 2025",
        desc: "Developed frontend and backend features for e-commerce applications using MERN stack. Implemented CRUD operations, authentication systems, debugging, testing, and worked in Agile environments using Git/GitHub."
    },
];

const TimelineCard = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative pl-8"
        >
            {/* Timeline Dot */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
                viewport={{ once: true }}
                className="absolute w-4 h-4 bg-emerald-400 rounded-full -left-[9px] top-2 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
            />

            {/* Card */}
            <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:border-emerald-400/50 transition-colors"
            >
                <h3 className="text-xl font-bold text-white">
                    {item.title}
                </h3>

                <p className="text-emerald-400 mt-2 font-medium">
                    {item.place}
                </p>

                <p className="text-gray-400 text-sm">
                    {item.year}
                </p>

                {item.desc && (
                    <p className="text-gray-300 mt-4 leading-7">
                        {item.desc}
                    </p>
                )}
            </motion.div>
        </motion.div>
    );
};

const TimelineSection = ({ title, icon, data }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
        >
            <h2 className="flex items-center gap-3 text-3xl font-bold text-emerald-400 mb-10">
                <span className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    {icon}
                </span>
                {title}
            </h2>

            <div className="relative border-l-2 border-emerald-400/40 ml-3 space-y-10">
                {data.map((item, index) => (
                    <TimelineCard
                        key={index}
                        item={item}
                        index={index}
                    />
                ))}
            </div>
        </motion.div>
    );
};

const Education = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white">
                        Education &{" "}
                        <span className="text-emerald-400 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            Experience
                        </span>
                    </h1>

                    <p className="text-gray-400 mt-4 text-lg">
                        My professional journey and growth
                    </p>

                    <div className="w-20 h-1 bg-emerald-400 rounded-full mx-auto mt-5 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                </motion.div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-16">
                    <TimelineSection
                        title="Education"
                        icon={<FaGraduationCap />}
                        data={educationData}
                    />

                    <TimelineSection
                        title="Experience"
                        icon={<FaBriefcase />}
                        data={experienceData}
                    />
                </div>
            </div>
        </section>
    );
};

export default Education;