import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';

const profiles = [
  { id: 1, name: 'Sarah', age: 24, image: '👩', color: '#ff6b6b' },
  { id: 2, name: 'Emma', age: 22, image: '👩‍🦰', color: '#4ecdc4' },
  { id: 3, name: 'Olivia', age: 23, image: '👱‍♀️', color: '#45b7d1' },
  { id: 4, name: 'Ava', age: 25, image: '👩‍🦱', color: '#96ceb4' },
];

function TinderCards() {
  const [cards, setCards] = useState(profiles);

  const removeCard = () => {
    setCards((prev) => prev.slice(1));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#f5f5f5',
        padding: '20px',
      }}
    >
      {/* Header */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          padding: '0 20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '400px',
          }}
        >
          <button
            style={{
              width: '40px',
              height: '40px',
              border: 'none',
              borderRadius: '50%',
              background: 'white',
              cursor: 'pointer',
              fontSize: '18px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            ☰
          </button>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#fe3c72' }}>tinder</h1>
          <div style={{ width: '40px' }} />
        </div>
      </div>

      {/* Cards Stack */}
      <div style={{ position: 'relative', width: '300px', height: '400px' }}>
        {cards.map((profile, index) => (
          <TinderCard key={profile.id} profile={profile} isTop={index === 0} onSwipe={removeCard} />
        ))}
      </div>

      {/* Action Buttons */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          display: 'flex',
          gap: '20px',
        }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            width: '60px',
            height: '60px',
            border: 'none',
            borderRadius: '50%',
            background: 'white',
            cursor: 'pointer',
            fontSize: '24px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          }}
        >
          ✕
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            width: '60px',
            height: '60px',
            border: 'none',
            borderRadius: '50%',
            background: 'white',
            cursor: 'pointer',
            fontSize: '24px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          }}
        >
          💜
        </motion.button>
      </div>
    </div>
  );
}

function TinderCard({ profile, isTop, onSwipe }) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 1, 1, 1, 0.5]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: '20px',
        background: profile.color,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        cursor: 'grab',
        x: isTop ? x : 0,
        rotate: isTop ? rotate : 0,
        opacity: isTop ? opacity : 1,
        zIndex: isTop ? 10 : 0,
      }}
      drag={isTop ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      onDragEnd={(e, { offset, velocity }) => {
        if (Math.abs(offset.x) > 100) {
          onSwipe();
        }
      }}
      whileTap={{ cursor: 'grabbing' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <span style={{ fontSize: '100px' }}>{profile.image}</span>
      </div>
      <div style={{ color: 'white' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>
          {profile.name}, {profile.age}
        </h2>
      </div>
    </motion.div>
  );
}

export default TinderCards;
