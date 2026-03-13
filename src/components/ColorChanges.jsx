import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const colors = [
  '#60aec9',
  '#f484b1',
  '#764ba4',
  '#89c0b4',
  '#666666',
];

function ColorChanges() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [layers, setLayers] = useState([]);

  const handleClick = () => {
    const nextIndex = (currentIndex + 1) % colors.length;
    setLayers([...layers, { color: colors[nextIndex], progress: 0 }]);
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    if (layers.length > 0) {
      setTimeout(() => {
        setLayers(prev =>
          prev.map((layer, i) =>
            i === prev.length - 1 ? { ...layer, progress: 1 } : layer
          )
        );
      }, 50);
    }
  }, [currentIndex]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '20px',
        background: '#1a1a2e',
      }}
      onClick={handleClick}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          height: '80vh',
          borderRadius: '10px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            background: colors[currentIndex],
          }}
          initial={false}
          animate={{ background: colors[currentIndex] }}
          transition={{ duration: 0.5 }}
        />
        <AnimatePresence>
          {layers.map((layer, index) => (
            <motion.div
              key={index}
              style={{
                position: 'absolute',
                inset: 0,
                background: layer.color,
              }}
              initial={{ width: 0 }}
              animate={{ width: `${layer.progress * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

import { useEffect } from 'react';

export default ColorChanges;
