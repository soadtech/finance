import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { ALIGN, COLORS, SIZE, WIGHT } from '../../helpers/constants';
import CustomText from '../CustomText';

const CustomButtom = ({ children, handler, style }) => {
    return (
        <TouchableOpacity onPress={handler} style={[styles.button, style]}>
            <CustomText size={SIZE.MEDIUM} align={ALIGN.CENTER} weight={WIGHT.SEMI_BOLD}>{children}</CustomText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.SECONDARY,
        paddingVertical: 20,
        borderRadius: 20,
    }
})
export default CustomButtom;