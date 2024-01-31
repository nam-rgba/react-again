import './App.css'
import Header from './components/header'
import Time from './components/time'
import Typing from './components/typing'
import { useTheme } from './hooks/useTheme'
import { useState } from 'react'
import useEngine from './hooks/useEngine'

function App() {


  const {theme,} = useTheme()
  const [timeL, setTime] = useState<number>(30);
  const {state, setState, words, setWords, time, displayTime, reset, start} = useEngine({timeLeft: timeL})

  console.log(words)


  return (
    <div className="w-full max-w-full h-screen p-5" style={{backgroundColor: theme.background.primary}}>
      <Header/>
      <div className="w-full max-w-full h-full flex flex-col items-center justify-center">
        <Time time={timeL} changeTime={setTime} color={theme.text.secondary}/>
        
          {/* Words */}
        <div className='w-2/3 h-1/2 flex flex-col items-center justify-center relative'>
          <div className='text-xl font-sans text-wrap text-justify absolute top-20 left-0' style={{color: theme.text.primary}}>{words}</div>

          <Typing color={theme.text.secondary} words={words}/>


        </div>
      </div>
    </div>
  )
}





export default App
