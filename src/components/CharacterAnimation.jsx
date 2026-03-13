import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

const characters = 'CodeWithArvind'.split('');

const color1 = '#667eea';
const color2 = '#d6575f';

function CharacterAnimation() {
  const [enable, setEnable] = useState(false);
  const containerRef = useRef(null);

  const handleDragEnd = (event, info) => {
    if (Math.abs(info.offset.x) > 50) {
      setEnable(!enable);
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#1a1a2e',
        cursor: 'grab',
        userSelect: 'none',
      }}
    >
      <motion.div
        style={{
          display: 'flex',
          gap: '2px',
        }}
        drag="x"
        dragConstraints={containerRef}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
      >
        {characters.map((char, index) => (
          <motion.div
            key={index}
            style={{
              padding: '8px 4px',
              fontSize: '20px',
              fontWeight: 'bold',
              color: 'white',
              borderRadius: '4px',
            }}
            animate={{
              background: enable ? color1 : color2,
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.2,
            }}
          >
            {char}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default CharacterAnimation;
