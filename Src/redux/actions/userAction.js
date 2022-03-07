import * as UserActionTypes from '../actionTypes/userActionTypes';
export const setName = (name) => ({
    type: UserActionTypes.SET_NAME,
    payload: name,

});
export const setAddress = (address) => ({
    type: UserActionTypes.SET_ADDRESS,
    payload: address,
})
export const setContact = (contact) => ({
    type: UserActionTypes.SET_CONTACT,
    payload: contact,
})