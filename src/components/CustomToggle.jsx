import { motion } from 'framer-motion';
import { useState } from 'react';

const Sun = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="5" fill="#ffd700" />
    <path d="M12 2V4M12 20V22M2 12H4M20 12H22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const Moon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      fill="#f5f5dc"
      stroke="#f5f5dc"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function CustomToggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: isOn ? '#000' : '#87ceeb',
        transition: 'background 0.5s ease',
      }}
    >
      <div
        onClick={() => setIsOn(!isOn)}
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '80px',
          height: '40px',
          background: isOn
            ? 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3))'
            : 'linear-gradient(to bottom, rgba(255,215,0,0.3), rgba(255,165,0,0.3))',
          borderRadius: '20px',
          padding: '4px',
          cursor: 'pointer',
          position: 'relative',
        }}
      >
        <motion.div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          }}
          animate={{
            x: isOn ? 36 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
          }}
        >
          <motion.div
            animate={{
              opacity: isOn ? 1 : 0,
              scale: isOn ? 1 : 0,
              rotate: isOn ? 90 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <Moon />
          </motion.div>
          <motion.div
            animate={{
              opacity: isOn ? 0 : 1,
              scale: isOn ? 0 : 1,
              rotate: isOn ? -90 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <Sun />
          </motion.div>
        </motion.div>
      </div>
      <p
        style={{
          marginTop: '20px',
          color: isOn ? 'white' : '#333',
          fontFamily: 'system-ui',
          fontSize: '18px',
          fontWeight: '500',
        }}
      >
        {isOn ? 'Moon' : 'SunRise'}
      </p>
    </div>
  );
}

export default CustomToggle;
