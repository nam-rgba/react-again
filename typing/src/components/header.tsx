import { FaKeyboard } from "react-icons/fa6";
import Theme from "./theme"


export default function Header({colorIcon}: {colorIcon: string}){
    return(
        <div className="w-full max-w-full h-12 flex flex-row items-center justify-between px-12">
            <div className="flex flex-row items-center w-1/5 justify-around">
                <h1 style={{color:colorIcon}}>NOTYPE </h1>
                <FaKeyboard size={48} style={{color:colorIcon}}/>
            </div>
            <div>
                <Theme/>
            </div>
        </div>
    )
}