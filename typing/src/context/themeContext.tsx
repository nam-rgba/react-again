import { createContext, useState } from "react";
import { Theme } from "../interface/type";
import { useLocalStorage } from "../hooks/useLocalStorage";
import {themes} from '../utils/index'

// Mọi thứ đều cần có type
export type ThemeContextValue = {
    theme: Theme,
    setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

// Tạo context
export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// Vẫn là type, của children
type ThemeContextType = {
    children: React.ReactNode
}

// Provider
export default function ThemeContextProvider({children}: ThemeContextType) {

    // Kiểm tra local storage, nếu có thì set lại theme
    const [localTheme,]=useLocalStorage<string>('THEME','blueDolphin'); // initial value là blueDolphin
    
    // Khởi tạo theme
    const [theme, setTheme] = useState<Theme>(()=>{
        // Lấy tên theme từ local storage, vào list theme lấy ra theme đó
        const theme = themes[localTheme]
        // Trả về theme
        return theme?theme:themes['blueDolphin']
    })

    const contextValue={
        theme,
        setTheme
    }

    return(
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
}



