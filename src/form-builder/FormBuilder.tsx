import React, { useState } from 'react';
import { Storage } from './Storage';
import './styles.css';
import { getInputComponent } from '.';

const FormBuilder = ({ data }: any) => {
    const [formData, setFormData] = useState(() => {
        const stored = Storage.getData('formData');
        if (stored && stored.length > 0) {
            return stored
        }
        return data;
    });

    const generateForm = (state: any) => {
        return Object.keys(state).map((groupKey, index) => {
            let groupFields = formData[groupKey];
            return <div className='group-row'>
                <div className='group-header'>{groupKey}</div>
                <div className='group-body'>
                    {groupFields && Object.keys(groupFields) && Object.keys(groupFields).length && Object.keys(groupFields).map((fieldKey) => {
                        if (!groupFields[fieldKey].visible) {
                            return null;
                        }
                        let field = groupFields[fieldKey];
                        console.log(field);
                        const Component = getInputComponent(field.type);
                        return <>
                            <div>{field.label}</div>
                            {/* <Component onChange={(e) => { }} {...field}></Component> */}
                            <div>
                                {field.children && Object.keys(field.children) && Object.keys(field.children).length > 0 && <div>
                                    {generateForm(field.children)}
                                </div>}
                            </div>
                        </>
                    })}
                </div>
            </div>
        })
    }

    return (
        <div className='form-container'>
            {generateForm(formData) as any}
        </div>
    )
}

export default FormBuilder
