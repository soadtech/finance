import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import CustomText from '../../commons/CustomText';
import { SIZE, WIGHT } from '../../helpers/constants';

const CardStatis = ({ title, background, cant, color, ico, handler }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={handler} style={{ flexDirection: "row", justifyContent: 'space-between', backgroundColor: background, padding: 20, borderRadius: 20, elevation: 3, width: "100%", marginBottom: 10 }}>
            <View>
                <CustomText color={color} size={SIZE.SMALL} weight={WIGHT.SEMI_BOLD}>{title}</CustomText>
                <CustomText color={color} size={SIZE.MEDIUM} weight={WIGHT.NORMAL}>$ {cant}</CustomText>
            </View>
            <View>
                {ico}
            </View>
        </TouchableOpacity>
    );
}

export default CardStatis;