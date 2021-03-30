import React from 'react';
import { ImageBackground, StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
import { COLORS } from '../../helpers/constants';

const MainWrapper = ({ children }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLORS.PRIMARY} />
            <ImageBackground style={styles.image} source={require('../../assets/background.png')}>
                {children}
            </ImageBackground>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",

    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        paddingHorizontal: 20,
    }
})

export default MainWrapper;