import React from 'react';
import { View } from 'react-native';
import Avatar from '../../commons/Avatar/Avatar';
import CustomText from '../../commons/CustomText';
import { ALIGN, SIZE, WIGHT } from '../../helpers/constants';

const CardPeople = ({ style, name, photo, cant, date, typeCant }) => {
    return (
        <View style={[{ backgroundColor: "white", padding: 20, borderRadius: 15 }, style]}>
            <View >
                <Avatar src={photo} />
                <CustomText style={{ marginTop: 5 }} align={ALIGN.LEFT} color="#000" size={SIZE.SMALL}>{name}</CustomText>
            </View>
            <View style={{ height: 30 }}>

            </View>
            <View>
                <CustomText align={ALIGN.LEFT} color="#000" size={SIZE.MEDIUM} weight={WIGHT.SEMI_BOLD}>{typeCant}${cant}</CustomText>
                <CustomText color="#cecece" size={SIZE.SMALL} weight={WIGHT.NORMAL}>{date}</CustomText>
            </View>
        </View>
    );
}

export default CardPeople;