import * as user from "../types/userTypes"
const initial_state = {
    none: null
}

export default function userReducer (state = initial_state, action) {
    switch (action.type) {
        case user.LOGIN:
            return {
                ...state,
                none: action.payload
            }
        default:
            return state
    }
}