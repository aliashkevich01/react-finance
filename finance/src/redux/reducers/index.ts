import { AUTHORIZE_ACTION_TYPE, UNAUTHORIZE_ACTION_TYPE, UPDATE_INFO_ACTION_TYPE } from "../actions/index";
import { ActionInterface, StateInterface } from "../../interfaces";

const initialState: StateInterface = {
    isAuthorized: true,
    firstName: '',
    lastName: '',
    mobilePhone: '',
    password: '',
    email: '',
    birthday: '2000-01-01',
    ocean: '',
    hobby: [],
    sex: '',
}

export const userReducer = (state = initialState, action: ActionInterface) => {
    switch(action.type) {
        case AUTHORIZE_ACTION_TYPE: 
        return {
            ...state,
            isAuthorized: true,
        };
        case UNAUTHORIZE_ACTION_TYPE: 
        return {
            ...state,
            isAuthorized: false,
        };
        case UPDATE_INFO_ACTION_TYPE: 
        const {
            firstName, 
            lastName, 
            mobilePhone, 
            password, 
            email, 
            birthday,
            ocean, 
            hobby, 
            sex
        } = action.payload!;
        return {
            ...state,
            firstName, 
            lastName, 
            mobilePhone, 
            password, 
            email, 
            birthday, 
            ocean, 
            hobby, 
            sex
        }
        default: return state;
    }
}