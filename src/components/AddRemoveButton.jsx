import { motion } from 'framer-motion';
import { useState } from 'react';

const bgColor = '#267aff';

function AddRemoveButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const horizontalLineVariants = {
    closed: { rotate: 0, x: 0, y: 0 },
    open: { rotate: -45, x: isOpen ? (window.innerWidth > 500 ? -10 : -5) : 0, y: isOpen ? (window.innerWidth > 500 ? -18 : -10) : 0 },
  };

  const verticalLineVariants = {
    closed: { rotate: 0, x: 0, y: 0 },
    open: { rotate: -45, x: isOpen ? (window.innerWidth > 500 ? 10 : 5) : 0, y: isOpen ? (window.innerWidth > 500 ? -8 : -4) : 0 },
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: bgColor,
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      <div
        style={{
          position: 'relative',
          width: '50px',
          height: '50px',
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            width: '40px',
            height: '10px',
            background: 'white',
            borderRadius: '4px',
            top: '50%',
            left: '50%',
            marginLeft: '-20px',
            marginTop: '-5px',
          }}
          animate={isOpen ? { rotate: -45 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          style={{
            position: 'absolute',
            width: '40px',
            height: '10px',
            background: 'white',
            borderRadius: '4px',
            top: '50%',
            left: '50%',
            marginLeft: '-20px',
            marginTop: '-5px',
          }}
          animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}

export default AddRemoveButton;
