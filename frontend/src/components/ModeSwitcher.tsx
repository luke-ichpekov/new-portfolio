import React from 'react';

interface ModeSwitcherProps {
  mode: string;
  onModeChange: (mode: string) => void;
}

const ModeSwitcher = ({ mode, onModeChange }: ModeSwitcherProps) => {
  return (
    <div className="mode-switcher">
      <button 
        className={`mode-button ${mode === 'light' ? 'active' : ''}`}
        onClick={() => onModeChange('light')}
      >
        Light
      </button>
      <button 
        className={`mode-button ${mode === 'dark' ? 'active' : ''}`}
        onClick={() => onModeChange('dark')}
      >
        Dark
      </button>
    </div>
  );
};

export default ModeSwitcher; 