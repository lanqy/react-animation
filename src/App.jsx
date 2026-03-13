import { useState } from 'react';
import AnimatedDots from './components/AnimatedDots';
import ThreeDotRotation from './components/ThreeDotRotation';
import RingAnimation from './components/RingAnimation';
import BackToBackAnimatedDot from './components/BackToBackAnimatedDot';
import ColorChanges from './components/ColorChanges';
import InstagramLoading from './components/InstagramLoading';
import AddRemoveButton from './components/AddRemoveButton';
import SwappingBall from './components/SwappingBall';
import CircleRotation from './components/CircleRotation';
import ChartAnimation from './components/ChartAnimation';
import CustomToggle from './components/CustomToggle';
import SlideMenuIcons from './components/SlideMenuIcons';
import CharacterAnimation from './components/CharacterAnimation';
import AnimatedTabBar from './components/AnimatedTabBar';
import CardPayment from './components/CardPayment';
import SideMenu from './components/SideMenu';
import TinderCards from './components/TinderCards';

const tabs = [
  { id: 'animatedDots', label: 'Animated Dots' },
  { id: 'threeDotRotation', label: 'Three Dot Rotation' },
  { id: 'ringAnimation', label: 'Ring Animation' },
  { id: 'backToBack', label: 'Back to Back Dots' },
  { id: 'colorChanges', label: 'Color Changes' },
  { id: 'instagram', label: 'Instagram Loading' },
  { id: 'addRemove', label: 'Add/Remove Button' },
  { id: 'swappingBall', label: 'Swapping Ball' },
  { id: 'circleRotation', label: 'Circle Rotation' },
  { id: 'chart', label: 'Chart Animation' },
  { id: 'toggle', label: 'Sun/Moon Toggle' },
  { id: 'slideMenu', label: 'Slide Menu' },
  { id: 'character', label: 'Character Animation' },
  { id: 'tabbar', label: 'Animated TabBar' },
  { id: 'cardPayment', label: 'Card Payment' },
  { id: 'sideMenu', label: 'Side Menu' },
  { id: 'tinder', label: 'Tinder Cards' },
];

function App() {
  const [activeTab, setActiveTab] = useState('animatedDots');

  const renderContent = () => {
    switch (activeTab) {
      case 'animatedDots':
        return <AnimatedDots />;
      case 'threeDotRotation':
        return <ThreeDotRotation />;
      case 'ringAnimation':
        return <RingAnimation />;
      case 'backToBack':
        return <BackToBackAnimatedDot />;
      case 'colorChanges':
        return <ColorChanges />;
      case 'instagram':
        return <InstagramLoading />;
      case 'addRemove':
        return <AddRemoveButton />;
      case 'swappingBall':
        return <SwappingBall />;
      case 'circleRotation':
        return <CircleRotation />;
      case 'chart':
        return <ChartAnimation />;
      case 'toggle':
        return <CustomToggle />;
      case 'slideMenu':
        return <SlideMenuIcons />;
      case 'character':
        return <CharacterAnimation />;
      case 'tabbar':
        return <AnimatedTabBar />;
      case 'cardPayment':
        return <CardPayment />;
      case 'sideMenu':
        return <SideMenu />;
      case 'tinder':
        return <TinderCards />;
      default:
        return <AnimatedDots />;
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <nav
        style={{
          display: 'flex',
          gap: '8px',
          padding: '12px',
          background: '#1a1a2e',
          flexWrap: 'wrap',
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              background: activeTab === tab.id ? '#667eea' : '#333',
              color: 'white',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.2s',
            }}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      <div style={{ flex: 1, overflow: 'hidden' }}>{renderContent()}</div>
    </div>
  );
}

export default App;
