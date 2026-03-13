import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const menuItems = [
  { id: 1, title: 'Home', icon: '🏠', color: '#667eea' },
  { id: 2, title: 'Profile', icon: '👤', color: '#f093fb' },
  { id: 3, title: 'Messages', icon: '💬', color: '#4facfe' },
  { id: 4, title: 'Settings', icon: '⚙️', color: '#00f2fe' },
  { id: 5, title: 'Analytics', icon: '📊', color: '#fa709a' },
];

function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);
  const selectItem = (index) => {
    setSelectedIndex(index);
    setIsOpen(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        background: '#f5f5f5',
        overflow: 'hidden',
      }}
    >
      {/* Sidebar */}
      <motion.div
        style={{
          width: '250px',
          height: '100%',
          background: 'white',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          zIndex: 10,
        }}
        initial={{ x: -250 }}
        animate={{ x: isOpen ? 0 : -250 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div style={{ marginBottom: '20px', padding: '10px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>Menu</h2>
        </div>
        {menuItems.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => selectItem(index)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 15px',
              border: 'none',
              borderRadius: '12px',
              background: selectedIndex === index ? item.color : 'transparent',
              color: selectedIndex === index ? 'white' : '#666',
              cursor: 'pointer',
              fontSize: '16px',
              textAlign: 'left',
              transition: 'all 0.2s',
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span style={{ fontSize: '20px' }}>{item.icon}</span>
            {item.title}
          </motion.button>
        ))}
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{
          flex: 1,
          background: menuItems[selectedIndex].color,
          borderRadius: isOpen ? '30px' : '0px',
          transformOrigin: 'top left',
          overflow: 'hidden',
        }}
        animate={{
          scale: isOpen ? 0.85 : 1,
          x: isOpen ? 80 : 0,
          rotate: isOpen ? -5 : 0,
          borderTopLeftRadius: isOpen ? 30 : 0,
          borderBottomLeftRadius: isOpen ? 30 : 0,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '20px',
            background: 'rgba(255,255,255,0.3)',
          }}
        >
          <motion.div
            onClick={toggleMenu}
            style={{
              width: '50px',
              height: '40px',
              background: '#f0f0f0',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '5px',
              cursor: 'pointer',
              padding: '8px',
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              style={{ width: '24px', height: '3px', background: '#333', borderRadius: '2px' }}
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
            />
            <motion.div
              style={{ width: '24px', height: '3px', background: '#333', borderRadius: '2px' }}
              animate={{ opacity: isOpen ? 0 : 1, scaleX: isOpen ? 0 : 1 }}
            />
            <motion.div
              style={{ width: '24px', height: '3px', background: '#333', borderRadius: '2px' }}
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
            />
          </motion.div>
          <h1
            style={{
              marginLeft: '20px',
              fontSize: '20px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            {menuItems[selectedIndex].title}
          </h1>
        </div>

        {/* Content */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(100% - 80px)',
          }}
        >
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              textAlign: 'center',
              color: 'white',
            }}
          >
            <span style={{ fontSize: '80px' }}>{menuItems[selectedIndex].icon}</span>
            <h2 style={{ fontSize: '32px', marginTop: '20px' }}>
              {menuItems[selectedIndex].title}
            </h2>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default SideMenu;
