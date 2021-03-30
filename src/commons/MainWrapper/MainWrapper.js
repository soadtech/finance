import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { COLORS } from '../../helpers/constants';
import WrapperPadding from '../WrapperPadding/WrapperPadding';

const MainWrapper = ({ children }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLORS.PRIMARY} />
            <ImageBackground source={require("../../assets/background.png")} style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {children}
                </View>
            </ImageBackground>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",

    }
})

export default MainWrapper;