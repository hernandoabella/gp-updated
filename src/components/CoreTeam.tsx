'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
  {
    name: 'Maria González',
    title: 'Executive Director',
    image: '/images/team/maria.webp',
  },
  {
    name: 'Gabriel Martinez',
    title: 'CEO',
    image: '/images/team/gabriel.webp',
  },
  {
    name: 'Samuel Valleste',
    title: 'Head of Research',
    image: '/images/team/sam.webp',
  },
];

const CoreTeam = () => {
  return (
    <section className="bg-white py-24 px-4 w-full">
      <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-[#0b2f61] mb-10">Our Core Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#0b2f61]">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;
