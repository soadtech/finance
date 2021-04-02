import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Avatar from '../../commons/Avatar/Avatar';
import * as Icons from "../../commons/Icons"
import { COLORS } from '../../helpers/constants';

const Header = ({ handler, back }) => {
    const image = back ? require("../../assets/back.png") : require("../../assets/campana.png")
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={handler}>
                <Image style={{ width: 40, height: 40 }} resizeMode="contain" source={image} />
            </TouchableOpacity>
            <Avatar src={require("../../assets/avatar.jpg")} />
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 5,
        alignItems: "center",
        backgroundColor: COLORS.WHITE_LIGHT
    }

})
export default Header;