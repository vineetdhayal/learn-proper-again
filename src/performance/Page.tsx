import React, { useMemo, useState } from 'react'
import CountriesList from './CountriesList';
import SelectedCountry from './SelectedCountry';

const Page = ({ countries }: any) => {
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [savedCountry, setSavedCountry] = useState(countries[0]);

    const list = useMemo(() => {
        return <CountriesList countries={countries} onCountryChanged={(c) => setSelectedCountry(c)} savedCountry={savedCountry}></CountriesList>
    }, [countries, selectedCountry]);

    const country = useMemo(() => {
        return <SelectedCountry country={selectedCountry} onSaveCountry={(c) => setSavedCountry(c)}></SelectedCountry>
    }, [selectedCountry]);

    return (
        <div>
            {list}
            {country}
        </div>
    )
}

export default Page
