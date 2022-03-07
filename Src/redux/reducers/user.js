import * as UserActionTypes from "../actionTypes/userActionTypes";

const initialState = {
    name: "Redux",
    address: "Kalyan naka",
    // contact: "+917208720525 ",

};


const user = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case UserActionTypes.SET_NAME:
            return {
                ...state,
                name: payload,
            };
        case UserActionTypes.SET_ADDRESS:
            return {
                ...state,
                address: payload,
            };
        // case UserActionTypes.SET_CONTACT:
        //     return {
        //         ...state,
        //         contact: payload,
        //     };




        default:
            return state;

    }
};
export default user;