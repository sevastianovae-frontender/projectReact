import React from "react"
export const AppContext = React.createContext({
    favorites: [],
    handleProductLike: () => {},
    isLoading: false
})
AppContext.displayName = "AppContext";