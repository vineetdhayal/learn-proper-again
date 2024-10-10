import React, { useContext } from 'react'
import { myContext } from './FormProvider';

const ActionsSection = () => {
    console.log('action section called');
    return (
        <section title='Actions'>
            <button>Save Form</button>
        </section>
    )
}

export default ActionsSection
