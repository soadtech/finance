import * as user from '../types/userTypes'

export function loginAction (data) {
    return {
        type: user.LOGIN,
        payload: data
    };
}
export function logoutAction () {
    return {
        type: user.LOGOUT
    };
}
