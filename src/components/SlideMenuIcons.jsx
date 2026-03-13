import { motion } from 'framer-motion';
import { useState } from 'react';

function SlideMenuIcons() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#f0f2f5',
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '7px',
          cursor: 'pointer',
        }}
      >
        <motion.div
          style={{
            width: '40px',
            height: '5px',
            background: '#333',
            borderRadius: '4px',
            transformOrigin: 'left',
          }}
          animate={{
            rotate: isOpen ? 35 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 25,
          }}
        />
        <motion.div
          style={{
            width: '40px',
            height: '5px',
            background: '#333',
            borderRadius: '4px',
          }}
          animate={{
            scaleX: isOpen ? 0 : 1,
            opacity: isOpen ? 0 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 25,
          }}
        />
        <motion.div
          style={{
            width: '40px',
            height: '5px',
            background: '#333',
            borderRadius: '4px',
            transformOrigin: 'left',
          }}
          animate={{
            rotate: isOpen ? -35 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 25,
          }}
        />
      </div>
    </div>
  );
}

export default SlideMenuIcons;
