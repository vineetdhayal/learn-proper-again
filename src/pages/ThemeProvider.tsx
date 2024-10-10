import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeProvider: any = (props: any) => {
    const [isDarkTheme, setisDarkTheme]: any = useState(false);
    const toggleTheme = (prevTheme: any) => setisDarkTheme(!prevTheme);

    const themeContext: any = createContext({isDarkTheme: false, toggleTheme});


    useEffect(() => {
        console.log(document);
        document.documentElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light')
    }, [isDarkTheme]);

    <themeContext.Provider value={{ isDarkTheme, toggleTheme }}>{props.children}</themeContext.Provider>
}

export default ThemeProvider;
