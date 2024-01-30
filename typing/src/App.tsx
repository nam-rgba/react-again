
import './App.css'
import {faker} from "@faker-js/faker"
import Header from './components/header'
import { useTheme } from './hooks/useTheme'

function App() {

  const {theme, setTheme} = useTheme()

  const words=faker.lorem.words(30)


  return (
    <div className="w-full max-w-full h-screen p-5" style={{backgroundColor: theme.background.primary}}>
      <Header/>
      <div className="w-full max-w-full h-full flex flex-col items-center justify-center">
        <div className='w-1/2 h-1/2 flex flex-col items-center justify-center'>

          <p className='text-3xl text-green_1'>{words}</p>
        </div>
      </div>
    </div>
  )
}

export default App
