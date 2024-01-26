import './App.css'
import { Routes, Route, Navigate} from 'react-router-dom'
import NewNote from './components/NewNote'

function App() {

  return (

 

      <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='/new' element={<NewNote/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
        <Route path='/:id' >
          <Route index element={<h1>Show</h1>}/>
          <Route path='edit' element={<h1>Edit</h1>}/>
        </Route>
      </Routes>


  )
}

export default App
