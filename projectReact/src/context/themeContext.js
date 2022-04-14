import React from "react";

export const themes = {
    ligth: {
        color: "#000000",
        background: "#ffffff"
    },
    dark: {
        color: "#ffffff",
        background: "#000000"
    }
}

export const ThemeContext = React.createContext({
    theme: themes.ligth,
    toggleTheme: () => {}
})

ThemeContext.displayName = "ThemeContext";