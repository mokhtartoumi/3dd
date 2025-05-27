import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { styles } from '../styles';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      title: "IT Student",
      school: "Higher Institute of Technological Studies (ISET) Zaghouan",
      period: "2025 - Present",
      description: "Specializing in software development, database systems, and network administration, with hands-on training in modern IT infrastructure and programming. Engaged in student-led tech initiatives and collaborative projects to enhance practical skills.",
      coursework: "Programming Fundamentals (Python, Java, C), Web Development (HTML, CSS, JavaScript), Database Management (SQL), Network Security, Cloud Computing.",
      achievement: "Participated in national coding competitions, achieving top 10% ranking.",
      location: "Zaghouan, Tunisia",
      image: "/ensit.jpg"
    },
    
  ];

  return (
    <section id="education" className="relative w-full min-h-screen mx-auto">
      <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mt-20 flex flex-col items-center"
        >
          <div className="flex items-center gap-4">
            <FaGraduationCap className="text-[40px] text-white" />
            <h2 className={`${styles.sectionHeadText}`}>
              Academic Education
            </h2>
          </div>
          <p className={`${styles.sectionSubText} mt-2`}>
            My educational journey
          </p>
        </motion.div>

        <div className="mt-20 flex flex-row justify-between gap-10">
          {education.map((item, index) => (
            <Tilt
              key={index}
              options={{
                max: 15,
                scale: 1.05,
                speed: 1000,
                transition: true,
              }}
              className="w-[45%]"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-tertiary p-5 rounded-2xl w-full border-2 border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="relative w-full">
                  <div className="absolute inset-0 flex justify-center m-3">
                    <div className="w-full bg-black-gradient rounded-xl p-4 border border-white/10">
                      <div className="w-[90%] mx-auto mb-4 rounded-lg overflow-hidden border border-white/20">
                        <img
                          src={item.image}
                          alt={item.school}
                          className="w-full h-[200px] object-cover"
                        />
                      </div>

                      <h3 className="text-white text-[20px] font-bold">
                        {item.title}
                      </h3>
                      <p className="text-secondary text-[16px] font-semibold mt-2">
                        {item.school}
                      </p>
                      <p className="text-white-100 text-[14px] mt-2">
                        {item.period}
                      </p>
                      <p className="text-white-100 text-[14px] mt-2">
                        {item.location}
                      </p>
                      <p className="text-white-100 text-[14px] mt-4">
                        {item.description}
                      </p>
                      {item.coursework && (
                        <p className="text-white-100 text-[14px] mt-4">
                          {item.coursework}
                        </p>
                      )}
                      {item.achievement && (
                        <p className="text-white-100 text-[14px] mt-4">
                          {item.achievement}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 