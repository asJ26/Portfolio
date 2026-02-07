'use client';

import { motion } from 'framer-motion';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaMediumM } from 'react-icons/fa';
import { SOCIAL_LINKS, PERSONAL_INFO } from '@/constants/contact';

const socialLinks = [
  { name: 'GitHub', url: SOCIAL_LINKS.github, icon: <BsGithub className="w-5 h-5" /> },
  { name: 'LinkedIn', url: SOCIAL_LINKS.linkedin, icon: <BsLinkedin className="w-5 h-5" /> },
  { name: 'Medium', url: SOCIAL_LINKS.medium, icon: <FaMediumM className="w-5 h-5" /> },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-neutral-200 dark:border-neutral-800">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center space-x-8"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-white/90 
                  hover:text-neutral-900 dark:hover:text-purple-400 
                  transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-center text-sm text-neutral-600 dark:text-white/60">
              © {currentYear} {PERSONAL_INFO.fullName}. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
