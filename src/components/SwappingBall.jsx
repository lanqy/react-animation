import { motion } from 'framer-motion';

const firstBallGradient = 'linear-gradient(to bottom, #667eea, #764ba4)';
const secondBallGradient = 'linear-gradient(to bottom, #d6575f, #764ba4)';

function SwappingBall() {
  const rowVariants = {
    initial: { y: 0 },
    animate: { y: -40 },
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#e0e5ec',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '20px',
        }}
      >
        <motion.div
          style={{
            display: 'flex',
            gap: '20px',
            x: 40,
          }}
          animate={{ y: -40 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.5 }}
        >
          <div
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: firstBallGradient,
            }}
          />
          <div
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: firstBallGradient,
            }}
          />
        </motion.div>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        <motion.div
          style={{
            display: 'flex',
            gap: '20px',
            x: 40,
          }}
          animate={{ y: 40 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.5 }}
        >
          <div
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: secondBallGradient,
            }}
          />
          <div
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: secondBallGradient,
            }}
          />
        </motion.div>
      </div>
      <div
        style={{
          marginTop: '80px',
          textAlign: 'center',
        }}
      >
        <p style={{ color: '#333', fontFamily: 'system-ui', fontSize: '16px', fontWeight: 'bold' }}>
          codewithArvind
        </p>
      </div>
    </div>
  );
}

export default SwappingBall;
