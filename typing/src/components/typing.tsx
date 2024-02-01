import Caret from "./caret";

type Props = {
    color: string
    words: string
    userInput: string
    className?: string  
}

const Typing=({color, words, userInput}: Props)=> {
    const chars = userInput.split('');
    return (
        <div className="absolute left-0 top-0 break-all font-mono text-xl lg:text-2xl z-10 text-left ">
            {chars.map((char, index)=>(
                <Character key={index} actual={char} expected={words[index]} color={color}/>
            ))}
            <Caret/>
        </div>
    )
}

const Character=({actual, expected, color}: {actual: string, expected: string, color: string})=> {
    const isCorrect = actual === expected;
    return (
        <span className={!isCorrect ? `bg-[rgba(255,95,90,0.4)] h-fit` : ``} style={{ color: isCorrect ? color : 'red' }}>
            {expected}
        </span>
    )
}

export default Typing;


