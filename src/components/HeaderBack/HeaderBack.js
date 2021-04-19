import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomText from "../../commons/CustomText"
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { ALIGN, COLORS, SIZE } from '../../helpers/constants';

const HeaderBack = ({ navigation, icon, step, active, content, tittle }) => {
    return (
        <View style={step && styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name={icon} color="#000" size={30} />
            </TouchableOpacity>
            <CustomText color={COLORS.PRIMARY} size={SIZE.MEDIUM} align={ALIGN.CENTER}>{tittle}</CustomText>
            {step && (
                <Text>
                    Step {active + 1} de {content}
                </Text>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});
export default HeaderBack;