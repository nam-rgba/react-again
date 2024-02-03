import { FaKeyboard } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import Theme from "./theme"


export default function Header({colorIcon, handleShow}: {colorIcon: string, handleShow: ()=>void}){
    return(
        <div className="w-full max-w-full h-12 flex flex-row items-center justify-between px-12 z-30">
            <div className="flex flex-row items-center w-1/5 justify-around">
                <h1 style={{color:colorIcon}}>NOTYPE </h1>
                <FaKeyboard size={48} style={{color:colorIcon}}/>
            </div>
            <div className="flex flex-row items-center justify-around w-1/6">
                <div className="cursor-pointer" onClick={handleShow}>
                    <FaChalkboardTeacher size={26} style={{color:colorIcon}}/>
                </div>
                <Theme/>
            </div>
        </div>
    )
}