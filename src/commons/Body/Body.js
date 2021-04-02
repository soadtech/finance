import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../helpers/constants';

const Body = ({ children }) => {
    return (
        <View style={styles.body}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: COLORS.BLUE,
        padding: 20,
    },

})

export default Body;