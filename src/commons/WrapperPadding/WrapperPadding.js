import React from 'react';
import { View } from 'react-native';

const WrapperPadding = ({ children }) => {
    return (
        <View style={{ paddingHorizontal: 20, flex: 1 }}>
            {children}
        </View>
    );
}

export default WrapperPadding;