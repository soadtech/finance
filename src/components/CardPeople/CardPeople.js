import React from 'react';
import { View } from 'react-native';
import Avatar from '../../commons/Avatar/Avatar';
import CustomText from '../../commons/CustomText';
import { ALIGN, SIZE, WIGHT } from '../../helpers/constants';

const CardPeople = ({ style }) => {
    return (
        <View style={[{ backgroundColor: "white", padding: 20, borderRadius: 15, elevation: 1 }, style]}>
            <View style={{ alignSelf: 'center' }}>
                <Avatar src={require('../../assets/avatar.jpg')} />
                <CustomText color="#000" size={SIZE.SMALL}>Oscar Wilson</CustomText>
            </View>
            <View style={{ height: 30 }}>

            </View>
            <View>
                <CustomText align={ALIGN.LEFT} color="#000" size={SIZE.MEDIUM} weight={WIGHT.SEMI_BOLD}>+$2,321</CustomText>
                <CustomText color="#cecece" size={SIZE.SMALL} weight={WIGHT.NORMAL}>20 Mar, 6:21 AM</CustomText>
            </View>
        </View>
    );
}

export default CardPeople;