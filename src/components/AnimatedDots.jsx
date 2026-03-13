import { motion } from 'framer-motion';

const bgColor = '#e0e5ec';
const ballGradient = 'linear-gradient(to right, #f35872, #f99068)';

const dotAnimation = {
  y: [0, -50, 0],
  transition: {
    duration: 0.8,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

function AnimatedDots() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '8px',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: bgColor,
      }}
    >
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          animate={dotAnimation}
          transition={{
            ...dotAnimation.transition,
            delay: index * 0.1,
          }}
          style={{
            width: '25px',
            height: '25px',
            borderRadius: '50%',
            background: ballGradient,
          }}
        />
      ))}
    </div>
  );
}

export default AnimatedDots;
