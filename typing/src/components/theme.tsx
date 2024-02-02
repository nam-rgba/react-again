import {useDropdown} from '../hooks/useDropdown'
import  {useTheme}  from '../hooks/useTheme'
import { themes } from '../utils'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


export default function Theme(){

    const  { isOpen, toggleDropdown, dropdownRef} = useDropdown()
    const {theme, setSystemTheme} = useTheme()

    return (
        <div className="relative" ref={dropdownRef}>
            <div className="flex flex-row items-center justify-around w-20 h-6 border border-city_light rounded pl-2 cursor-pointer"
                    onClick={()=>toggleDropdown()}

            >
                <div className={`w-3 h-3 `} style={{backgroundColor: theme.background.secondary}}  ></div>
                <div className={`w-3 h-3 `} style={{backgroundColor: theme.text.primary}}  ></div>
                <div className={`w-3 h-3 `} style={{backgroundColor: theme.text.secondary}} ></div>
                <div className={`flex flex-row items-center h-full rotate-${isOpen?180:0} transition-all`} >
                  {isOpen?
                    <IoIosArrowUp size={14} color={theme.text.secondary}/>
                  : <IoIosArrowDown size={14} color={theme.text.secondary}/>
                }
                </div>
            </div>
            <div className='absolute right-0 z-10 shadow-st w-48'
                style={{display: isOpen? 'block': 'none', borderRadius: '0.5rem', backgroundColor: theme.background.primary,border: theme.text.secondary}}
            >
                <ul
              className={`divide-y divide-slate-400`}
              style={{ color: theme.text.title }}
            >
              {Object.keys(themes).map((key) => (
                <li
                  key={key}
                  className='flex cursor-pointer items-center justify-between p-3 text-sm'
                  onClick={() => {
                    setSystemTheme(key as keyof typeof theme);
                  }}
                >
                  <span>{themes[key as keyof typeof theme].name}</span>
                  <div className='flex items-center gap-2'>
                    <div
                      style={{
                        backgroundColor:
                          themes[key as keyof typeof theme].background.primary,
                      }}
                      className={`aspect-square w-3 rounded-full`}
                    ></div>
                    <div
                      style={{
                        backgroundColor:
                          themes[key as keyof typeof theme].text.primary,
                      }}
                      className={`aspect-square w-3 rounded-full`}
                    ></div>
                    <div
                      style={{
                        backgroundColor:
                          themes[key as keyof typeof theme].text.secondary,
                      }}
                      className={`aspect-square w-3 rounded-full`}
                    ></div>
                  </div>
                </li>
              ))}
                </ul>
            </div>
        </div>
    )
}