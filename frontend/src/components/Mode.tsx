import React, { useState } from 'react'

export default function Mode() 
{
const [mode, setMode] = useState('dark')

    const toggleMode = (newMode: string) => {
        setMode(newMode);
        document.documentElement.setAttribute('data-theme', newMode);
      };
  return (
    <div className="mode-switcher">
    <button 
      className={`mode-button ${mode === 'light' ? 'active' : ''}`}
      onClick={() => toggleMode('light')}
    >
      Light
    </button>
    <button 
      className={`mode-button ${mode === 'dark' ? 'active' : ''}`}
      onClick={() => toggleMode('dark')}
    >
      Dark
    </button>
  </div>
  )
}
