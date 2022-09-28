import { createAction } from "@reduxjs/toolkit";

export const AUTHORIZE_ACTION_TYPE = 'AUTHORIZE';
export const UNAUTHORIZE_ACTION_TYPE = 'UNAUTHORIZE';
export const UPDATE_INFO_ACTION_TYPE = 'UPDATE_INFO';

export const AuthorizeAction = createAction(AUTHORIZE_ACTION_TYPE);
export const unAuthorizeAction = createAction(UNAUTHORIZE_ACTION_TYPE);
export const updateAction = createAction(UPDATE_INFO_ACTION_TYPE, (obj) => {
    return {
      payload: {
        ...obj
      }  
    }
});