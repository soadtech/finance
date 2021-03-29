import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { COLORS } from '../../helpers/constants';

const MainWrapper = ({ children }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLORS.PRIMARY} />
            {children}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: COLORS.PRIMARY,
        paddingHorizontal: 20
    }
})

export default MainWrapper;