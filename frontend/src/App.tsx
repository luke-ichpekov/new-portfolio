import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ModeSwitcher from './components/ModeSwitcher'

function App() {
  const [mode, setMode] = useState('dark');

  const handleModeChange = (newMode: string) => {
    setMode(newMode);
    document.documentElement.setAttribute('data-theme', newMode);
  };

  return (
    <>
      <ModeSwitcher mode={mode} onModeChange={handleModeChange} />
      <Header mode={mode} />
    </>
  );
}

export default App
