import { createContext } from "react";

export const context = createContext(null);

export const ContextProvider = ({ children }: any) => {
    const person = 'vineet';
    const data = [{ a: 'dwefw', b: 'hello' }];
    const clickedd = () => {
        console.log('clicked');
    }

    return <context.Provider value={{person, data, clickedd} as any}>{children}</context.Provider>
}
