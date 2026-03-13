import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const cards = [
  { id: 1, limit: '$12,500', bank: 'HDFC Bank', color: '#667eea' },
  { id: 2, limit: '$8,200', bank: 'ICICI Bank', color: '#f093fb' },
  { id: 3, limit: '$15,000', bank: 'SBI Bank', color: '#4facfe' },
];

function CardPayment() {
  const [showDetail, setShowDetail] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setShowDetail(!showDetail);
  };

  const currentCard = cards[currentIndex];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#000',
        overflow: 'hidden',
      }}
      onClick={handleClick}
    >
      <AnimatePresence>
        {!showDetail && (
          <motion.div
            key="statement"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'absolute',
              top: '100px',
              textAlign: 'center',
            }}
          >
            <h1 style={{ color: 'white', fontSize: '35px', fontWeight: 'bold' }}>
              Statement
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '20px', marginTop: '10px' }}>
              Available Credit Limit
            </p>
            <p style={{ color: 'white', fontSize: '35px', fontWeight: 'bold' }}>
              {currentCard.limit}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        style={{
          perspective: '1000px',
          marginTop: showDetail ? '-50px' : '50px',
        }}
      >
        <motion.div
          style={{
            width: '300px',
            height: '180px',
            borderRadius: '20px',
            background: `linear-gradient(135deg, ${currentCard.color}, #764ba4)`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '20px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          }}
          animate={{
            rotateY: showDetail ? 180 : 0,
          }}
          transition={{
            duration: 0.6,
            type: 'spring',
            stiffness: 100,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>
              {currentCard.bank}
            </span>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
              Credit Card
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <div
              style={{
                width: '50px',
                height: '35px',
                borderRadius: '5px',
                background: 'linear-gradient(135deg, #ffd700, #ffaa00)',
              }}
            />
            <div style={{ color: 'white', fontSize: '18px', letterSpacing: '2px' }}>
              **** **** **** 4582
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              color: 'white',
              fontSize: '14px',
            }}
          >
            <span>CARD HOLDER</span>
            <span>EXPIRES</span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              color: 'white',
              fontSize: '12px',
            }}
          >
            <span>JOHN DOE</span>
            <span>12/25</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        style={{
          position: 'absolute',
          bottom: showDetail ? '100px' : '-200px',
          background: 'white',
          borderRadius: '20px',
          padding: '20px',
          width: '300px',
        }}
        animate={{
          y: showDetail ? 0 : 200,
          opacity: showDetail ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
        }}
      >
        <h3 style={{ margin: '0 0 15px 0', fontSize: '18px' }}>Card Details</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#666' }}>Card Number</span>
            <span>**** 4582</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#666' }}>Balance</span>
            <span>{currentCard.limit}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#666' }}>Credit Limit</span>
            <span>{currentCard.limit}</span>
          </div>
        </div>
      </motion.div>

      <p
        style={{
          position: 'absolute',
          bottom: '30px',
          color: 'rgba(255,255,255,0.5)',
          fontSize: '14px',
        }}
      >
        Tap to toggle
      </p>
    </div>
  );
}

export default CardPayment;
