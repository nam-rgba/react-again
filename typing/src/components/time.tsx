import {times} from '../utils/index'
import { IoIosTimer } from "react-icons/io";


type Props = {

    timeStart: number
    timeLeft: number
    changeTime: (time: number) => void
    color: string
    isRunning: string
}

export default function Time({timeStart, timeLeft, changeTime, color, isRunning}: Props) {
    return(
        <div className="w-2/3 h-8 flex flex-row items-center justify-between bg-inherit ">
            <div className="flex flex-row items-center justify-around w-1/4 h-full border rounded" style={{borderColor: color, color:color}}>

                <IoIosTimer size={20} />
                {Object.keys(times).map((key) => (
                    
                        <button
                            key={key}
                            className="w-8 h-8 rounded bg-transparent hover:text-airbnb_yellow transition-all cursor-pointer focus:text-airbnb_yellow"
                            onClick={() => changeTime(times[key])}
                        >
                            {key}
                        </button>
                    
                ))}
            </div>

            <div className='w-1/5 h-full text-center' style={{color: color}} >
                    {isRunning==='START'?timeStart:timeLeft} seconds left
            </div>
        </div>
    )
}