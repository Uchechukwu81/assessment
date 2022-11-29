import React, {useState, useCallback} from 'react';

export const Context = React.createContext({})

export const NavToggleProvider = ({children}) => {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    const closeSidebar = useCallback(() => setSidebarOpen(false), [])
    
    const openSidebar = useCallback(() => setSidebarOpen(true), [])

    const toggleSidebar = useCallback(() => setSidebarOpen(prev => !prev), [])

    const value = {
        toggleSidebar,
        openSidebar,
        closeSidebar,
        sidebarOpen
    }

    return(
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}