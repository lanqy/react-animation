import { motion } from 'framer-motion';

function RingAnimation() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#1a1a2e',
        gap: '20px',
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
            width: '30px',
            height: '30px',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        >
          <svg width="30" height="30" viewBox="0 0 30 30">
            <defs>
              <linearGradient id="ringGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#667eea" />
                <stop offset="100%" stopColor="#764ba4" />
              </linearGradient>
            </defs>
            <circle
              cx="15"
              cy="15"
              r="10"
              fill="none"
              stroke="url(#ringGradient1)"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
        <motion.div
          style={{
            width: '30px',
            height: '30px',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        >
          <svg width="30" height="30" viewBox="0 0 30 30">
            <circle
              cx="15"
              cy="15"
              r="10"
              fill="none"
              stroke="url(#ringGradient1)"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '20px',
        }}
      >
        <motion.div
          style={{
            width: '30px',
            height: '30px',
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        >
          <svg width="30" height="30" viewBox="0 0 30 30">
            <circle
              cx="15"
              cy="15"
              r="10"
              fill="none"
              stroke="url(#ringGradient1)"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
        <motion.div
          style={{
            width: '30px',
            height: '30px',
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        >
          <svg width="30" height="30" viewBox="0 0 30 30">
            <circle
              cx="15"
              cy="15"
              r="10"
              fill="none"
              stroke="url(#ringGradient1)"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}

export default RingAnimation;
