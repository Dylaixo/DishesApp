export { };
export interface DataValues {
    name: string;
    preparation_time: Date;
    type: string;
    no_of_slices: number;
    diameter: number;
    spiciness_scale: number;
    slices_of_bread: number;
}

export interface DataErrors {
    name?: string;
    preparation_time?: string;
    type?: string;
    diameter?: string
    spiciness_scale?: string;
    slices_of_bread?: string;
    no_of_slices?: string;
}
export interface FormData {
    name: string;
    preparation_time: Date;
    type: string;
    no_of_slices: number;
    diameter: number;
    spiciness_scale: number;
    slices_of_bread: number;
}