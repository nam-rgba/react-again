import useGenerateWords from './useGenerateWords';
import useCountdown from './useCountdown';
import { useMemo, useState } from 'react';


export type State = 'START' | 'PLAYING' | 'END';


const useEngine = ({time}:{time: number}) => {
    const [state, setState] = useState<State>('START');
    const NUM_WORDS = useMemo(() => 20, []);
    const {words, setWords} = useGenerateWords(NUM_WORDS);
    const { timeLeft, startCountdown, resetCountdown }= useCountdown(time);

    return {state, setState, words, setWords, timeLeft, startCountdown, resetCountdown};

}

export default useEngine;