import FormCheckbox from "./FormCheckbox"
import FormInput from "./FormInput"

export const getInputComponent = (type: any) => {
    switch (type) {
        case 'text':
        case 'password':
        case 'email':
            return FormInput
        case 'checkbox':
            return FormCheckbox;
        default:
            return FormInput;
    }
}
