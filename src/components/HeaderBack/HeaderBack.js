import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const HeaderBack = ({ navigation, icon, step, active, content }) => {
    return (
        <View style={step && styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name={icon} color="#000" size={30} />
            </TouchableOpacity>
            {step && (
                <Text>
                    Step {active + 1} de {content}
                </Text>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});
export default HeaderBack;