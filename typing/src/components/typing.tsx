import { memo } from "react";
import Caret from "./caret";

type Props = {
    color: string
    words: string
}

const Typing=({color, words}: Props)=> {
    console.log(words)
    const chars = words.split('');
    return (
        <div className="text-xl font-sans text-wrap text-justify absolute top-20 left-0">
            {chars.map((char, index)=>(
                <span key={index} style={{color:color}}>{char}</span>
            ))}
            <Caret/>
        </div>
    )
}


export default memo(Typing);
