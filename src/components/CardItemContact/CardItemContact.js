import React from 'react';
import { View } from 'react-native';
import Avatar from '../../commons/Avatar';
import CustomText from '../../commons/CustomText';
import { COLORS, SIZE } from '../../helpers/constants';

const CardItemContact = () => {
    return (
        <View style={{ flexDirection: "row", backgroundColor: COLORS.BLUE, padding: 10, borderRadius: 15, alignItems: "center", marginBottom: 10 }}>
            <Avatar src={require("../../assets/avatar.jpg")} />
            <View style={{ marginLeft: 10 }}>
                <CustomText size={SIZE.MEDIUM} color={COLORS.PRIMARY}>Ricardo Albor</CustomText>
            </View>
        </View>
    );
}

export default CardItemContact;