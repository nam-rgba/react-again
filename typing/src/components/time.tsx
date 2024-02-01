import {times} from '../utils/index'

type Props = {

    timeStart: number
    timeLeft: number
    changeTime: (time: number) => void
    color: string
    isRunning: boolean
}

export default function Time({timeStart, timeLeft, changeTime, color, isRunning}: Props) {
    return(
        <div className="w-2/3 h-8 flex flex-row items-center justify-between bg-inherit ">
            <div className="flex flex-row items-center justify-around w-1/4 h-full">
                {Object.keys(times).map((key) => (
                    
                        <button
                            key={key}
                            className="w-8 h-8 border border-city_light rounded"
                            onClick={() => changeTime(times[key])}
                        >
                            {key}
                        </button>
                    
                ))}
            </div>

            <div className='w-1/5 h-full text-center' style={{color: color}} >
                    {isRunning ? timeLeft : timeStart}
            </div>
        </div>
    )
}