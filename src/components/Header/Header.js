import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Avatar from '../../commons/Avatar/Avatar';
import * as Icons from "../../commons/Icons"

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
        padding: 20,
        alignItems: "center"
    }
})
export default Header;