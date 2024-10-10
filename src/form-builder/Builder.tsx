import React from 'react'
import FormBuilder from './FormBuilder';
import data from './form-data';

const Builder = () => {
    return (
        <div>
            <FormBuilder data={data} />
        </div>
    )
}

export default Builder
