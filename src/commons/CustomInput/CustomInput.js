import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { ALIGN, COLORS, SIZE, WIGHT } from '../../helpers/constants';
import CustomText from '../CustomText';

const CustomInput = ({ placeholder, label, style, type, action, value }) => {
    const handleChangeText = (evt) => {
        action(evt)
    }
    return (
        <View style={styles.containerInput}>
            <CustomText color="gray" size={SIZE.SMALL} align={ALIGN.LEFT} weight={WIGHT.NORMAL}>{label}</CustomText>
            <TextInput value={value} onChangeText={(evt) => handleChangeText(evt)} keyboardType={type} autoCapitalize="none" placeholderTextColor={COLORS.PRIMARY} style={[styles.input, style]} placeholder={placeholder} />
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
        color: COLORS.PRIMARY
    }
})
export default CustomInput;