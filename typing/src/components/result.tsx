import {motion} from 'framer-motion'
import { IoReloadCircleSharp } from "react-icons/io5";

const Result=(
    {accuracy,error,wpm,title, secondary, state, restart}
    :{accuracy:number, error: number, wpm:number ,title:string, secondary:string,state:string, restart:()=>void}
    )=>{
    if(state!=='END') return null
    const initial = { opacity: 0 };
    const animate = { opacity: 1 };
    return(
        
        <motion.div
            initial={initial}
            animate={animate}
            className='w-full h-40 flex flex-col items-center justify-center mt-8'
        >
            <div className='w-2/5 h-full flex flex-col items-center justify-center'>
                <div className='flex flex-row items-center justify-around w-fit text-2xl'>
                    <p className='' style={{color:title}}>Result</p>
                    <div className='cursor-pointer hover:rotate-180 transition-all ml-4' onClick={restart}>
                        <IoReloadCircleSharp color={title} size={24}/>
                    </div>
                </div>
                <p style={{color:secondary}}>Accuracy: {accuracy}</p>
                <p style={{color:secondary}}>Errors: {error}</p>
                <p style={{color:secondary}}>wpm: {wpm}</p>
            </div>
        </motion.div>
    )
}

export default Result;