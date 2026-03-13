import { motion } from 'framer-motion';

const darkBlue = '#60aec9';
const darkPink = '#f484b1';
const darkGreen = '#89c0b4';
const bgColor = '#292a30';

function ThreeDotRotation() {
  const dotVariants = {
    first: {
      y: [0, -26.67, 0],
      transition: { duration: 1, repeat: Infinity, ease: 'easeInOut' },
    },
    second: {
      x: [0, -26.67, 0],
      y: [0, 26.67, 0],
      transition: { duration: 1, repeat: Infinity, ease: 'easeInOut' },
    },
    third: {
      x: [0, 26.67, 0],
      y: [0, 26.67, 0],
      transition: { duration: 1, repeat: Infinity, ease: 'easeInOut' },
    },
  };

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
      <motion.div
        style={{
          width: '80px',
          height: '80px',
          position: 'relative',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      >
        <motion.div
          style={{
            width: '26.67px',
            height: '26.67px',
            borderRadius: '50%',
            background: darkBlue,
            position: 'absolute',
            left: '50%',
            top: '50%',
            marginLeft: '-13.335px',
            marginTop: '-13.335px',
          }}
          animate={dotVariants.first}
        />
        <motion.div
          style={{
            width: '26.67px',
            height: '26.67px',
            borderRadius: '50%',
            background: darkPink,
            position: 'absolute',
            left: '50%',
            top: '50%',
            marginLeft: '-13.335px',
            marginTop: '-13.335px',
          }}
          animate={dotVariants.second}
        />
        <motion.div
          style={{
            width: '26.67px',
            height: '26.67px',
            borderRadius: '50%',
            background: darkGreen,
            position: 'absolute',
            left: '50%',
            top: '50%',
            marginLeft: '-13.335px',
            marginTop: '-13.335px',
          }}
          animate={dotVariants.third}
        />
      </motion.div>
    </div>
  );
}

export default ThreeDotRotation;
