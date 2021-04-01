import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Avatar from '../../commons/Avatar/Avatar';
import * as Icons from "../../commons/Icons"
import { COLORS } from '../../helpers/constants';

const Header = () => {
    return (
        <View style={styles.header}>
            <Image style={{ width: 40, height: 40 }} resizeMode="contain" source={require("../../assets/campana.png")} />
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