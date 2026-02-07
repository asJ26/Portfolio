'use client';

import { motion } from 'framer-motion';
import { HoverExpandableCard } from '@/components/ui/HoverExpandableCard';
import { certifications } from '@/constants/certifications';

export default function Certifications() {
  // Group certifications into pairs for the grid
  const certificationRows = certifications.reduce((rows, cert, index) => {
    if (index % 2 === 0) {
      rows.push([cert]);
    } else {
      rows[rows.length - 1].push(cert);
    }
    return rows;
  }, [] as typeof certifications[]);

  return (
    <section id="certifications" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-neutral-600 dark:text-white/80 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </motion.div>

        <div className="space-y-4">
          {certificationRows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {row.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <HoverExpandableCard {...cert} />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
