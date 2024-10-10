import React, { Children, createContext, useMemo, useState } from 'react';

export const myContextData = createContext({});
export const myContextApi = createContext({});


const FormProvider = ({ Children }: any) => {
    const [state, setState] = useState({ discount: 10, name: 'vineet', country: 'india' });
    const onNameChange = (name: string) => {
        setState({ ...state, name })
    }
    const onDiscountChange = (discount: any) => {
        setState({ ...state, discount });
    }

    const onCountryChange = (country: any) => {
        setState({ ...state, country });
    }

    const onSave = () => {
        console.log('saving');
    }

    const value = useMemo(() => {
        return { onNameChange, onCountryChange, onDiscountChange, onSave }
    }, [state]);

    const valueData = useMemo(() => {
        return { state }
    }, [state]);

    return (
        <myContextApi.Provider value={value}>
            <myContextData.Provider value={{ valueData } as any}>{Children}</myContextData.Provider>
        </myContextApi.Provider>
    )
}

export default FormProvider
