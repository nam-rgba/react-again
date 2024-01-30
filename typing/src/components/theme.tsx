import {useDropdown} from '../hooks/useDropdown'
import  {useTheme}  from '../hooks/useTheme'


export default function Theme(){

    const  { isOpen, toggleDropdown, dropdownRef} = useDropdown()
    const {theme, setTheme} = useTheme()

    return (
        <div className="relative">
            <div className="flex flex-row items-center justify-around w-12 h-4 border border-city_light rounded">
                <div className={`w-3 h-3 `} style={{backgroundColor: theme.background.primary}} ></div>
            </div>
        </div>
    )
}