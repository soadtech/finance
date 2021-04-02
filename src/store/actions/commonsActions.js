import * as commons from '../types/commonsTypes'

export function openBottomSheetAction () {
    return {
        type: commons.OPEN_BOTTOM_SHEET
    };
}
export function closeBottomSheetAction () {
    return {
        type: commons.CLOSE_BOTTOM_SHEET
    };
}
