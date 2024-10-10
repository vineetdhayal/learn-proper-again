import React from 'react'
import DiscountSection from './DiscountSection'
import NameFormComponent from './NameFormComponent'
import SelectCountryFormComponent from './SelectCountryFormComponent'

const PersonalInfoSection = () => {
    console.log('personal info section')
    return (
        <div>
            <DiscountSection />
            <NameFormComponent />
            <SelectCountryFormComponent />
        </div>
    )
}

export default PersonalInfoSection
