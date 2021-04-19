import React from 'react';
import { View } from 'react-native';
import Avatar from '../../commons/Avatar';
import CustomText from '../../commons/CustomText';
import { COLORS, SIZE } from '../../helpers/constants';

const CardItemContact = ({ image, name }) => {
    return (
        <View style={{ flexDirection: "row", backgroundColor: COLORS.BLUE, padding: 10, borderRadius: 15, alignItems: "center", marginBottom: 10 }}>
            <Avatar uri src={image} />
            <View style={{ marginLeft: 10 }}>
                <CustomText size={SIZE.MEDIUM} color={COLORS.PRIMARY}>{name}</CustomText>
            </View>
        </View>
    );
}

export default CardItemContact;