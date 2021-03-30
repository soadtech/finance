import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Avatar = ({ src }) => {
    return (
        <View style={styles.avatar}>
            <Image style={styles.imageAvatar} resizeMode="contain" source={src} />
        </View>
    );
}
const styles = StyleSheet.create({
    avatar: {

    },
    imageAvatar: {
        width: 60,
        height: 60,
        borderRadius: 150
    }
})
export default Avatar;