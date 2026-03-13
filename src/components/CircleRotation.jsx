import { motion } from 'framer-motion';

const ballGradient = 'linear-gradient(135deg, #667eea 0%, #764ba4 100%)';

const capsuleHeights = [100, 120, 150, 130, 100];

function CircleRotation() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#1a1a2e',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '190px',
          height: '190px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '170px',
            height: '170px',
            borderRadius: '50%',
            background: ballGradient,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            marginLeft: '-25%',
            marginTop: '-30%',
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {capsuleHeights.map((height, index) => (
            <motion.div
              key={index}
              style={{
                width: '12px',
                height: `${height}px`,
                background: 'white',
                borderRadius: '6px',
              }}
              animate={{
                height: [height * 0.6, height, height * 0.6],
              }}
              transition={{
                duration: 0.5 + index * 0.1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>
        <motion.svg
          width="190"
          height="190"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        >
          <circle
            cx="95"
            cy="95"
            r="90"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="5"
            strokeDasharray="30 30"
            strokeDashoffset="40"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#667eea" />
              <stop offset="100%" stopColor="#764ba4" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>
    </div>
  );
}

export default CircleRotation;
