import { put, call, takeLatest } from "redux-saga/effects"
import * as user from '../types/userTypes'

import { logoutAction } from "../actions/userAction"

function* loginUser () {
    yield put(logoutAction())
}

function* hello () {
    alert("cerrando sesion")

}

// Watchers
export default function* users () {
    yield takeLatest(user.LOGIN, loginUser),
        yield takeLatest(user.LOGUOT, hello)
}
