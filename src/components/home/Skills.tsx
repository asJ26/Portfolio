'use client';

import { motion } from 'framer-motion';
import { FloatingSkill } from '@/components/ui/FloatingSkill';
import { skillRows } from '@/constants/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-3 sm:mb-4">
            My Expertise
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-white/80 max-w-2xl mx-auto">
            Hover over the skills to explore my technical proficiencies
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-2 sm:gap-4 lg:gap-6">
          {skillRows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: rowIndex * 0.1 }}
              className={`
                flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4
                w-[98%] sm:w-[96%] lg:w-[94%]
                ${rowIndex === 1 && 'w-[96%] sm:w-[92%] lg:w-[88%]'}
                ${rowIndex === 2 && 'w-[94%] sm:w-[88%] lg:w-[82%]'}
                ${rowIndex === 3 && 'w-[92%] sm:w-[84%] lg:w-[76%]'}
              `}
            >
              {row.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: index * 0.05
                  }}
                >
                  <FloatingSkill
                    icon={skill.icon}
                    name={skill.name}
                    color={skill.color}
                  />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
