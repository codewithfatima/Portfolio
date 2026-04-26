import React from 'react'
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";


const Education = () => {
    return (

        <div className='mt-25 mb-10 text-center'>
            {/* section heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-emerald-400 mb-4">
                Education & Experience
            </h1>
            <p className="text-lg text-gray-300">My journey so far</p>
            <span className="block h-1 w-16 bg-emerald-400 mx-auto mt-4 rounded-lg"></span>


            <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mt-10 px-4 md:px-0 text-left '>
                <div>
                    {/* education section */}
                    <h2 className="text-2xl font-bold text-emerald-400 flex items-center gap-2 mb-6">
                        <FaGraduationCap className="text-emerald-400 ml-5" /> Education
                    </h2>

                    <div className='space-y-6'>
                        <div className='bg-[#0f172a] p-5 rounded-xl shadow hover:scale-105 transition'>
                            <h3 className='text-xl text-white font-semibold'>
                                Bachelor’s in Software Engineering</h3>
                            <p className="text-gray-400">Virtual University of paksitan — 2020 - 2024</p>
                            <p className="text-gray-300 mt-2 text-sm">
                                Learned core programming, algorithms, databases, and full-stack
                                web development. Worked on multiple academic and freelance projects.
                            </p>
                        </div>

                        <div className='bg-[#0f172a] p-5 rounded-xl shadow hover:scale-105 transition'>
                            <h3 className='text-xl text-white font-semibold'>
                                High School
                            </h3>
                            <p className="text-gray-400">Pakistan School Salmiya Safat,Kuwait — 2019 - 2020</p>

                        </div>

                        <div className='bg-[#0f172a] p-5 rounded-xl shadow hover:scale-105 transition'>
                            <h3 className='text-xl text-white font-semibold'>
                                Secondary School</h3>
                            <p className="text-gray-400">Pakistan School Salmiya, Safat Kuwait — 2018 - 2019</p>
                        </div>
                    </div>
                </div>


                {/* Experience */}
                <div>
                    <h2 className="text-2xl font-bold text-emerald-400 flex items-center gap-2 mb-6">
                        <FaBriefcase className="text-emerald-400 ml-5" /> Experience
                    </h2>
                    <div className="space-y-6">
                        <div className="bg-[#0f172a] p-5 rounded-xl shadow hover:scale-105 transition">
                            <h3 className="text-xl text-white font-semibold">
                                Mern-Stack Developer Job
                            </h3>
                            <p className="text-gray-400">Sidra International Company Aug - Oct - 2025 </p>
                            <p className="text-gray-300 mt-2 text-sm">
                                Developed and deployed a bilingual Arabic/English corporate website using MERN.
                                Built a secure admin panel for managing news, gallery, and announcements.
                                Implemented role-based access, responsive layouts, and brand-consistent design.
                                Maintained and improved multiple company websites for performance and UI consistency.
                            </p>
                        </div>

                        <div className="bg-[#0f172a] p-5 rounded-xl shadow hover:scale-105 transition">
                            <h3 className="text-xl text-white font-semibold">
                                Internship Mern Stack Developer
                            </h3>
                            <p className="text-gray-400">June - August- 2025 </p>
                            <p className="text-gray-300 mt-2 text-sm">
                                Designed and developed responsive websites for small businesses
                                using React, TailwindCSS, and Node.js. Delivered user-friendly,
                                optimized, and secure applications.
                            </p>
                        </div>

                        <div className="bg-[#0f172a] p-5 rounded-xl shadow hover:scale-105 transition">
                            <h3 className="text-xl text-white font-semibold">
                                Internship as Mern Developer
                            </h3>
                            <p className="text-gray-400">  June — 2024 </p>
                            <p className="text-gray-300 mt-2 text-sm">
                                Designed and developed responsive websites for small businesses
                                using React, TailwindCSS, and Node.js. Delivered user-friendly,
                                optimized, and secure applications.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Education

