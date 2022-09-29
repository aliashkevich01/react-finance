import { ChangeEvent } from "react";

export interface UserInterface {
    firstName: string;
    lastName: string;
    mobilePhone: string;
    password: string;
    email: string;
    birthday: string;
    ocean: string;
    hobby: Array<string>;
    sex: string;
}
export interface StateInterface extends UserInterface {
    isAuthorized: boolean;
}
export interface ActionInterface {
    type: string;
    payload?: UserInterface;
}
export interface StoreIterface {
    userReducer: StateInterface;
}
export interface InputPropsInterface {
    labelText: string;
    type: string;
    value: string;
    placeholder: string;
    Change: (e: ChangeEvent<HTMLInputElement>) => void;
}
export interface CheckboxPropsInterface {
    items: Array<string>; 
    checked: Array<string>; 
    change: (e: ChangeEvent<HTMLInputElement>) => void
}
export interface RadioGroupInterface {
    checked: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export interface ModalPropsInterface {
    onHide: () => void, 
    show: boolean, 
    items: Array<string | Array<string>>
}
export interface SelectPropsInterface {
    items: Array<string>;
    change: (e: ChangeEvent<HTMLSelectElement>) => void;
    default: string;
}
export interface DateInterface {
    day: string;
    month: string;
    year: string;
}
export interface DateInputInterface extends DateInterface{
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export interface ObjectInterface {
    minLength?:string;
    maxLength?:string;
    minAge?:string;
    maxAge?:string;
    regExp?:string;
    oneOf?:Array<string>;
    anyOf?: Array<string>;
  }