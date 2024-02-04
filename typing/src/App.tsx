import './App.css'
import Header from './components/header'
import Time from './components/time'
import Typing from './components/typing'
import Words from './components/words'
import Thank from './components/thank'
import { useTheme } from './hooks/useTheme'
import { useEffect, useState } from 'react'
import useEngine from './hooks/useEngine'
import Result from './components/result'
import { calcAccuracy, calcWPM } from './utils'

function App() {

  const [timeL, setTime] = useState<number>(30);
  const [openThank, setOpenThank] = useState<boolean>(false)
  const {theme,} = useTheme()
  const { words, timeLeft, error, resetCountdown, typed, totalTyped, state, restart } = useEngine(timeL, () => setOpenThank(false));

  const handleChangeTime = (time: number) => {
    const newTime= time;
    setTime( newTime)
  }
  useEffect(() => {
    resetCountdown()
  }, [timeL, resetCountdown])

  const handleShowThank = () => {
    setOpenThank(!openThank)
  }


  return (
    <div className="min-w-full w-full max-w-full h-screen p-5" style={{backgroundColor: theme.background.primary}}>
      <Header colorIcon={theme.text.title} handleShow={handleShowThank} />
      <div className="w-full max-w-full h-[calc(100vh-5rem)] flex flex-col items-center justify-center">
        <Time timeStart={timeL} timeLeft={timeLeft} changeTime={handleChangeTime} color={theme.text.secondary} isRunning={state}/>
        
          {/* Words */}
        <div className='w-2/3 h-fit flex flex-col items-center justify-center relative mt-12 p-8 transition-all'>
          <Words color={theme.text.primary} words={words}/>
          <Typing color={theme.text.secondary} words={words} userInput={typed}/>
        </div>

        <Result accuracy={calcAccuracy(totalTyped, error)}
                error={error}
                wpm={calcWPM(timeL, totalTyped)}
                title={theme.text.title}
                secondary={theme.text.secondary}
                state={state}
                restart={restart}
                />
      </div>
      {openThank && <Thank close={handleShowThank}/>}
    </div>
  )
}





export default App
