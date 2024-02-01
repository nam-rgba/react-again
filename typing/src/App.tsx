import './App.css'
import Header from './components/header'
import Time from './components/time'
import Typing from './components/typing'
import Words from './components/words'
import { useTheme } from './hooks/useTheme'
import { useState } from 'react'
import useEngine from './hooks/useEngine'

function App() {


  const {theme,} = useTheme()
  const [timeL, setTime] = useState<number>(30);
  const { words, timeLeft, resetCountdown, isRunning,typed} = useEngine({timeL: timeL})

  const handleChangeTime = (time: number) => {
    const newTime= time;
    setTime( newTime)
    resetCountdown();
  }


  return (
    <div className="w-full max-w-full h-screen p-5" style={{backgroundColor: theme.background.primary}}>
      <Header/>
      <div className="w-full max-w-full h-[calc(100vh-5rem)] flex flex-col items-center justify-center">
        <Time timeStart={timeL} timeLeft={timeLeft} changeTime={handleChangeTime} color={theme.text.secondary} isRunning={isRunning}/>
        
          {/* Words */}
        <div className='w-2/3 h-1/2 flex flex-col items-center justify-center relative'>
          <Words color={theme.text.primary} words={words}/>
          <Typing color={theme.text.secondary} words={words} userInput={typed}/>
        </div>
      </div>
    </div>
  )
}





export default App
