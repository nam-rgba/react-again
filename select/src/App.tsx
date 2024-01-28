import { useState } from 'react'
import { XMarkIcon, TrashIcon } from '@heroicons/react/16/solid'
import {v4 as uuidV4} from 'uuid'


import './App.css'

type Tag={
  id: string
  value: string
}

const initTags = [
  {
    id: '1',
    value: 'JavaScript'
  },
  {
    id: '2',
    value: 'Java'
  },
  {
    id: '3',
    value: 'An Chee'
  }
]

const Item=({value, remove}:{value:string, remove:(value:string)=>void})=>{


  return (
    <div className='w-2/12 h-8 border-green_2 border rounded-full p-2 shadow-none mx-1 flex flex-row items-center'>

      <div onClick={()=>remove(value)}>
        <XMarkIcon className='w-4 h-4 fill-airbnb_rausch cursor-pointer' />
      </div>
      <p className='text-xs'>{value}</p>
    </div>
  )
}

function App() {
  const [query, setQuery] = useState<string>('')
  const [tags, setTags]=useState<Tag[]>(initTags)
  const [selectedTags, setSelectedTags]=useState<Tag[]>([])
  const [isOpen, setIsOpen]=useState<boolean>(false)

  const handleSelect=(tagx:Tag):void=>{
    if(selectedTags.includes(tagx)) return
    setSelectedTags(prev=>[...prev, tagx])
  }

  const handleRemove=(value:string)=>{
    setSelectedTags(prev=>prev.filter(tag=>tag.value !== value))
  }

  const handleDelete=(value:string)=>{
    setTags(prev=>prev.filter(tag=>tag.value !== value))
  }

  const handleNewTag=(e:React.FormEvent)=>{
    e.preventDefault()
    if(query === '') return
    const newTag={value: query, id: uuidV4()}
    setTags(prev=>[...prev, newTag])
    setSelectedTags(prev=>[...prev, newTag])
    setQuery('')
  }
  return (
    <div className='bg-city_light h-full w-full flex flex-row items-center justify-center'>
      <div className='w-1/3  flex flex-col items-center p-8 bg-white shadow-st rounded .relative'>
        <div className='w-full min-h-11 h-max rounded p-2 mb-4 flex flex-row flex-wrap shadow-st'>
          {selectedTags.map((stag)=>(<Item value={stag.value} key={stag.id} remove={handleRemove}/>))}
        </div>
        <form className='w-full' onSubmit={(e)=>handleNewTag(e)}>
          <input type="text" 
            id='tag'
            name='tag'
            value={query} 
            onChange={(e)=>setQuery(e.target.value)} 
            className='w-full h-8 p-4 border border-green_2 rounded-full outline-none'
            onFocus={()=>setIsOpen(true)} />
        </form>

        <div className='w-full max-h-32 overflow-y-scroll flex flex-col .absolute top-3/4 shadow-st mt-2'>
          {isOpen && tags.filter((tag)=>tag.value.includes(query.toLowerCase())).map((tagx)=>(
            <div className='w-full h-10 p-2 flex flex-row item justify-between cursor-pointer' key={tagx.id} >
              <div  onClick={()=>handleSelect(tagx)}>
                {tagx.value}
              </div>
              <div onClick={()=>handleDelete(tagx.value)}>
                <TrashIcon className='w-4 h-4 fill-airbnb_rausch cursor-pointer' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
