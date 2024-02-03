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

export interface Tutor{
    name: string;
    link: string;
}

export interface Result{
    accuracy: number;
    error: number;
    wpm: number;
}