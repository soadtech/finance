import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Avatar from '../../commons/Avatar';
import CustomText from '../../commons/CustomText';
import { COLORS, SIZE } from '../../helpers/constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CardItemContact = ({ image, name, handleSelectContact, selected }) => {
    return (
        <TouchableOpacity onPress={handleSelectContact} style={{ flexDirection: "row", backgroundColor: COLORS.BLUE, padding: 10, borderRadius: 15, alignItems: "center", marginBottom: 10, justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Avatar uri src={image} />
                <View style={{ marginLeft: 10 }}>
                    <CustomText size={SIZE.MEDIUM} color={COLORS.PRIMARY}>{name}</CustomText>
                </View>
            </View>

            <View>
                <Icon name="checkbox-marked-circle" color={selected === 1 ? "green" : "gray"} size={30} />
            </View>
        </TouchableOpacity>
    );
}

export default CardItemContact;