import * as commons from '../types/commonsTypes'

const initialState = {
    openButtonSheet: 0
}

export default function authReducer (state = initialState, action) {
    switch (action.type) {
        case commons.OPEN_BOTTOM_SHEET:
            return {
                ...state,
                openButtonSheet: 2
            };
        case commons.CLOSE_BOTTOM_SHEET:
            return {
                ...state,
                openButtonSheet: 0
            };
        default:
            return state;
    }
}
