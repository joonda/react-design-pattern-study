import {use} from "react";
import {ThemeContext} from "./ThemeContext.ts";

export const useTheme = () => {
    const ctx = use(ThemeContext)
    if (!ctx) {
        throw new Error('useTheme must be used within ThemeProvider')
    }

    return ctx
}