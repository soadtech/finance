import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { COLORS } from '../../helpers/constants';
import WrapperPadding from '../WrapperPadding/WrapperPadding';

const MainWrapper = ({ children, login }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.WHITE_LIGHT} s />
            {login ? (
                <ImageBackground source={require("../../assets/background.png")} style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        {children}
                    </View>
                </ImageBackground>
            ) :
                <View style={{ flex: 1, backgroundColor: COLORS.BLUE }}>
                    {children}
                </View>
            }

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