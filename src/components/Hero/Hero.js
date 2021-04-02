import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../helpers/constants';

const Hero = ({ children, style }) => {
    return (
        <View style={[styles.hero, style]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    hero: {
        flex: 0.2,
        backgroundColor: COLORS.WHITE_LIGHT,
        padding: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    }
})

export default Hero;