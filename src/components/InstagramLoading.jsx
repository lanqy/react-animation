import { motion } from 'framer-motion';

function InstagramLoading() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#f0f2f5',
      }}
    >
      <motion.svg
        width="150"
        height="150"
        viewBox="0 0 150 150"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      >
        <motion.circle
          cx="75"
          cy="75"
          r="70"
          fill="none"
          stroke="#0095f6"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray="440"
          strokeDashoffset={0}
          initial={{ pathLength: 1 / 9 }}
          animate={{
            pathLength: [1 / 9, 2 / 5, 1 / 9],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
            times: [0, 0.5, 1],
          }}
        />
      </motion.svg>
      <p
        style={{
          marginTop: '20px',
          color: '#333',
          fontFamily: 'system-ui',
          fontSize: '18px',
        }}
      >
        CodewithArvind
      </p>
    </div>
  );
}

export default InstagramLoading;
