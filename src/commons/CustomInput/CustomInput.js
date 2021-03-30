import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { ALIGN, COLORS, SIZE, WIGHT } from '../../helpers/constants';
import CustomText from '../CustomText';

const CustomInput = ({ placeholder, label }) => {
    return (
        <View style={styles.containerInput}>
            <CustomText color="gray" size={SIZE.SMALL} align={ALIGN.LEFT} weight={WIGHT.NORMAL}>{label}</CustomText>
            <TextInput autoCapitalize="none" placeholderTextColor={COLORS.WHITE} style={styles.input} placeholder={placeholder} />
        </View>
    );
}
const styles = StyleSheet.create({
    containerInput: {
        marginBottom: 20
    },
    input: {
        borderBottomWidth: 0.7,
        borderBottomColor: "white",
        paddingVertical: 10,
        fontSize: 20,
        color: COLORS.WHITE
    }
})
export default CustomInput;