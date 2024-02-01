

const Words = ({color, words}:{color:string, words:string}) => {

    const wordsArr= words.split('');

    return (
            <div className="absolute left-0 top-0 break-all font-mono text-xl lg:text-2xl opacity-80 text-left" style={{color:color}}>
                {wordsArr.map((word, index)=>(<span key={index}>{word}</span>))}
            </div>
    )
}

export default Words;