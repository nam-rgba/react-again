/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css'
import { Routes, Route, Navigate} from 'react-router-dom'
import NewNote from './components/NewNote'
import { useLocalStorage } from './hooks/useLocalStorage'
import {v4 as uuidV4} from 'uuid'



export type NoteData={
  title: string
  body: string
  tags: Tag[]
}
export type Note={
  id: string
} & NoteData

export type Tag={
  id: string
  label: string
}

export type RawNote={
  id: string
}

export type RawNoteData={
  title: string
  body: string
  tagIds: string[]
}


function App() {

  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  const onCreateNote=(data: NoteData)=>{
    setNotes(prevNotes=>[...prevNotes,{
      id: uuidV4(),
      ...data
    }])
  }

  return (
      <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='/new' element={<NewNote onSubmitF={onCreateNote}/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
        <Route path='/:id' >
          <Route index element={<h1>Show</h1>}/>
          <Route path='edit' element={<h1>Edit</h1>}/>
        </Route>
      </Routes>
  )
}

export default App
