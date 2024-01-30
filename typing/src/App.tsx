
import './App.css'
import {faker} from "@faker-js/faker"
import Header from './components/header'
import Time from './components/time'
import { useTheme } from './hooks/useTheme'
import { useState } from 'react'

function App() {

  const {theme, setTheme} = useTheme()
  const [time, setTime] = useState<number>(30);

  const words=faker.lorem.words(50)


  return (
    <div className="w-full max-w-full h-screen p-5" style={{backgroundColor: theme.background.primary}}>
      <Header/>
      <div className="w-full max-w-full h-full flex flex-col items-center justify-center">
        <Time time={time} changeTime={setTime}/>
        
          {/* Words */}
        <div className='w-2/3 h-1/2 flex flex-col items-center justify-center'>
          <p className='text-xl font-sans text-wrap text-justify' style={{color: theme.text.primary}}>{words}</p>
        </div>
      </div>
    </div>
  )
}



export default App
