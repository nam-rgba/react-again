export interface Theme {
    name: string;
    background:{
        primary: string;
        secondary: string;
    };
    text:{
        primary: string;
        secondary: string;
        title:string;
    };
}

export interface Result{
    accuracy: number;
    error: number;
    time: number;
    wpm: number;
}