import { useCallback, useContext } from "react";
import { ThemeContext, ThemeContextValue } from "../context/themeContext";
import { useLocalStorage } from "./useLocalStorage";
import { themes } from "../utils";

export const useTheme = () => {
    // 
    const [, setLocalTheme]=useLocalStorage<string>('THEME','blueDolphin');
    const {theme, setTheme} = useContext(ThemeContext) as ThemeContextValue;

    const setSystemTheme=useCallback((value:string)=>{
        setTheme(themes[value]);
        setLocalTheme(value);
    },
    [setTheme, setLocalTheme]);
    return {theme, setSystemTheme}
}