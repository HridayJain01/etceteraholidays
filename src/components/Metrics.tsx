import React, { useRef, useEffect, useState } from 'react';
import { Globe, Users, Map, Award } from 'lucide-react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

// Counter component: animates from 0 to `end` when in view
const Counter = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 100,
    damping: 20,
    duration: 1,
  });

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
    const unsubscribe = springValue.on('change', (latest) => {
      if (latest <= end) {
        setCurrent(Math.floor(latest));
      }
    });
    return () => unsubscribe();
  }, [isInView, end, motionValue, springValue]);

  return (
    <span ref={ref}>
      {current.toLocaleString()}
      {suffix}
    </span>
  );
};

// Main Statistics component
const Statistics = () => {
  const stats = [
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      number: 50,
      suffix: '+',
      title: 'Destinations',
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      number: 10000,
      suffix: '+',
      title: 'Happy Customers',
    },
    {
      icon: <Map className="w-8 h-8 text-blue-400" />,
      number: 500,
      suffix: '+',
      title: 'Tours Completed',
    },
    {
      icon: <Award className="w-8 h-8 text-blue-400" />,
      number: 15,
      suffix: '+',
      title: 'Years Experience',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 to-black py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-blue-500/10 rounded-full">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                <Counter end={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-blue-400 font-medium">{stat.title}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
