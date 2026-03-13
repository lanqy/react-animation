import { motion } from 'framer-motion';
import { useState } from 'react';

const chartData = [
  { value: 200, color: '#ffd700' },
  { value: 250, color: '#ffd700' },
  { value: 300, color: '#ffd700' },
  { value: 250, color: '#ffd700' },
  { value: 200, color: '#ffd700' },
  { value: 300, color: '#ffd700' },
  { value: 250, color: '#ffd700' },
  { value: 200, color: '#ffd700' },
];

function ChartAnimation() {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleClick = () => {
    setIsAnimated(!isAnimated);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#000',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: '20px',
          height: '300px',
          paddingTop: '10px',
        }}
      >
        {chartData.map((item, index) => (
          <motion.div
            key={index}
            style={{
              width: '25px',
              height: '300px',
              background: 'white',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'flex-end',
              overflow: 'hidden',
            }}
          >
            <motion.div
              style={{
                width: '100%',
                height: isAnimated ? `${item.value}px` : `${item.value * 0.3}px`,
                background: item.color,
                borderRadius: '12px',
              }}
              animate={{
                height: isAnimated ? `${item.value}px` : `${item.value * 0.3}px`,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: 'easeOut',
              }}
            />
          </motion.div>
        ))}
      </div>
      <p
        style={{
          marginTop: '40px',
          color: 'white',
          fontFamily: 'system-ui',
          fontSize: '16px',
        }}
      >
        codewithArvind
      </p>
    </div>
  );
}

export default ChartAnimation;
