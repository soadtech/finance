import * as user from '../types/userTypes'

const initialState = {
    data: {},
    auth: false
}

export default function authReducer (state = initialState, action) {
    switch (action.type) {
        case user.LOGIN:
            return {
                ...state,
                data: action.payload,
                auth: true
            };
        case user.LOGOUT:
            return {
                ...state,
                data: {},
                auth: false
            };
        default:
            return state;
    }
}