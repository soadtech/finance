import React from 'react';
import { Text } from 'react-native';
import { COLORS, SIZE, WIGHT, ALIGN } from '../../helpers/constants';

const CustomText = ({ children, size, weight, align, color, style }) => {

    const textStyle = {
        color: color,
        fontSize: size,
        fontWeight: weight,
        textAlign: align
    };

    return (
        <Text style={[textStyle, style]}>{children}</Text>
    );
}

CustomText.defaultProps = {
    size: SIZE.BIG,
    weight: WIGHT.SEMI_BOLD,
    align: ALIGN.CENTER,
    color: COLORS.WHITE
};

export default CustomText;