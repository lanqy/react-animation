import { motion } from 'framer-motion';
import { useState } from 'react';

const tabs = [
  { id: 'home', icon: '🏠', color: '#3b82f6' },
  { id: 'heart', icon: '❤️', color: '#ef4444' },
  { id: 'dumbbell', icon: '💪', color: '#f97316' },
  { id: 'camera', icon: '📷', color: '#22c55e' },
];

function AnimatedTabBar() {
  const [selectedTab, setSelectedTab] = useState('home');

  const getTabIndex = () => tabs.findIndex((t) => t.id === selectedTab);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        background: '#1a1a2e',
      }}
    >
      <div
        style={{
          flex: 1,
          background: tabs.find((t) => t.id === selectedTab)?.color,
          transition: 'background 0.3s ease',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '400px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <svg width="100%" height="80" style={{ position: 'absolute' }}>
          <defs>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.15" />
            </filter>
          </defs>
          <path
            d={getCustomShapePath(getTabIndex())}
            fill="white"
            filter="url(#shadow)"
          />
        </svg>

        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
            padding: '0 25px',
          }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              style={{
                width: '30px',
                height: '30px',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                fontSize: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              animate={{
                y: selectedTab === tab.id ? -50 : 0,
                scale: selectedTab === tab.id ? 1.2 : 1,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
            >
              <span style={{ opacity: selectedTab === tab.id ? 1 : 0.6 }}>
                {tab.icon}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

function getCustomShapePath(tabIndex) {
  const widths = [90, 90, 90, 90];
  const totalWidth = widths.reduce((a, b) => a + b, 0);
  const spacing = 25;
  const paddingHorizontal = 25;

  let currentX = 0;
  for (let i = 0; i <= tabIndex; i++) {
    currentX += widths[i] + (i < tabIndex ? spacing : 0);
  }
  const center = paddingHorizontal + currentX - widths[tabIndex] / 2;

  const width = 400;
  const height = 60;
  const bumpHeight = 35;

  return `
    M 0 0
    L ${width} 0
    L ${width} ${height}
    L 0 ${height}
    Z
    M ${center - 50} 0
    C ${center - 25} ${bumpHeight}, ${center + 25} ${bumpHeight}, ${center + 50} 0
    Z
  `;
}

export default AnimatedTabBar;
