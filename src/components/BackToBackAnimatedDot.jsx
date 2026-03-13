import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const bgColor = '#e0e5ec';
const dotGradient = 'linear-gradient(to top, #d6575f, #764ba4)';

function BackToBackAnimatedDot() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  useEffect(() => {
    const runAnimation = async () => {
      while (true) {
        await controls1.start({
          y: -40,
          transition: { duration: 0.2, ease: 'easeInOut' },
        });
        
        await Promise.all([
          controls1.start({
            x: 40,
            y: -40,
            transition: { duration: 0.4, ease: 'easeInOut' },
          }),
          controls2.start({
            x: -20,
            transition: { duration: 0.4, ease: 'easeInOut' },
          }),
        ]);

        await Promise.all([
          controls1.start({
            x: 40,
            y: 0,
            transition: { duration: 0.2, ease: 'easeInOut' },
          }),
          controls3.start({
            x: -20,
            transition: { duration: 0.2, ease: 'easeInOut' },
          }),
        ]);

        await Promise.all([
          controls1.start({
            x: 0,
            y: 0,
            transition: { duration: 0.2, ease: 'easeInOut' },
          }),
          controls2.start({
            x: 0,
            transition: { duration: 0.2, ease: 'easeInOut' },
          }),
          controls3.start({
            x: 0,
            transition: { duration: 0.2, ease: 'easeInOut' },
          }),
        ]);

        await new Promise(resolve => setTimeout(resolve, 160));
      }
    };

    runAnimation();
  }, [controls1, controls2, controls3]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: bgColor,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        {[controls1, controls2, controls3].map((control, index) => (
          <motion.div
            key={index}
            animate={control}
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: dotGradient,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default BackToBackAnimatedDot;
