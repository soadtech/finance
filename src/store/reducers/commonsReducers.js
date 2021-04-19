import * as commons from '../types/commonsTypes'

const initialState = {
    openButtonSheet: false
}

export default function commonsReducer (state = initialState, action) {
    switch (action.type) {
        case commons.OPEN_BOTTOM_SHEET:
            return {
                ...state,
                openButtonSheet: true
            };
        case commons.CLOSE_BOTTOM_SHEET:
            return {
                ...state,
                openButtonSheet: false
            };
        default:
            return state;
    }
}
