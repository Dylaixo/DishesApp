export { };
import { WrappedFieldMetaProps } from 'redux-form'

//Interface for data validation
export interface DataValues {
    name: string;
    preparation_time: Date;
    type: string;
    no_of_slices: number;
    diameter: number;
    spiciness_scale: number;
    slices_of_bread: number;
}

//Interface for text field render
export interface RenderFieldProps {
    input: any;
    meta: WrappedFieldMetaProps;
    label: string;
    type: string;
    pattern: string;
    step: number;
    checked: string;
    min: string;
    max: string;
    sticky: boolean;
}

//Interface for data validation errors
export interface DataErrors {
    name?: string;
    preparation_time?: string;
    type?: string;
    diameter?: string
    spiciness_scale?: string;
    slices_of_bread?: string;
    no_of_slices?: string;
}

//Interface for form data
export interface FormData {
    name: string;
    preparation_time: Date;
    type: string;
    no_of_slices: number;
    diameter: number;
    spiciness_scale: number;
    slices_of_bread: number;
}
