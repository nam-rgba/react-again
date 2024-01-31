/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useRef, useState } from "react"

const useCountdown = (time: number) => {

    // number of seconds left
    const [timeLeft, setTimeLeft] = useState<number>(time);
    // Interval ref
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    // Check is end?
    const hasTimeLeft = timeLeft<=0;
    // Check is runing
    const isRunning = intervalRef.current !== null;


    // Start countdown
    const startCountdown = useCallback(() => {
        if(!isRunning && !hasTimeLeft) {
            // Set interval
            intervalRef.current = setInterval(()=>{
                setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
            },1000)
        }
    },[setTimeLeft, isRunning, hasTimeLeft]);

    // Reset countdown
    const reserCountdown = useCallback(() => {
        // Clear interval if exist 
        clearInterval(intervalRef.current!);
        // Set interval to null
        intervalRef.current = null;
        // Reset time
        setTimeLeft(time);
    },[time]);
    

}