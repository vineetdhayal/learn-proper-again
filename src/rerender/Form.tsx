import React, { useContext, useState } from 'react'
import PersonalInfoSection from './PersonalInfoSection';
import valueCalculationsSection from './valueCalculationsSection';
import ActionsSection from './ActionsSection';
import ValueCalculationsSection from './valueCalculationsSection';
import FormProvider, { myContext } from './FormProvider';

const Form = () => {
console.log('i am called');
    return (
        <>
            <PersonalInfoSection />
            <ValueCalculationsSection />
            <ActionsSection />
        </>
    )
}

export default Form
