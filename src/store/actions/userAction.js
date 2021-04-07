import * as user from '../types/userTypes'

export const loginAction = (payload) => {
    return {
        type: user.LOGIN,
        payload
    };
}
export const logoutAction = () => {
    return {
        type: user.LOGUOT
    };
}