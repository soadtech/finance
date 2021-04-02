import React from 'react';
import { Text, View, StyleSheet, Animated, TouchableWithoutFeedback, Image } from 'react-native';
import { COLORS } from '../../helpers/constants';


const FloatingButton = ({ style }) => {
    const animation = new Animated.Value(0);
    let open = 0

    const toggleMenu = () => {
        const toValue = open ? 0 : 1;

        Animated.spring(animation, {
            toValue,
            friction: 5,
            useNativeDriver: true
        }).start()

        open = !open
    }

    const qrStyle = {
        transform: [
            {
                scale: animation
            },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -80]
                })
            }
        ]
    }

    const incomeStyle = {
        transform: [
            {
                scale: animation
            },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -140]
                })
            }
        ]
    }

    const outcomeStyle = {
        transform: [
            {
                scale: animation
            },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -200]
                })
            }
        ]
    }

    const rotation = {
        transform: [
            {
                rotate: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "45deg"]
                })

            }
        ]
    }

    return (
        <View style={[styles.container, style]}>
            <TouchableWithoutFeedback>
                <Animated.View style={[styles.button, styles.secondary, outcomeStyle]}>
                    <Image resizeMode="contain" style={{ width: 30 }} source={require("../../assets/clipboard.png")} />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <Animated.View style={[styles.button, styles.secondary, incomeStyle]}>
                    <Image resizeMode="contain" style={{ width: 30 }} source={require("../../assets/income.png")} />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <Animated.View style={[styles.button, styles.secondary, qrStyle]}>
                    <Image resizeMode="contain" style={{ width: 30 }} source={require("../../assets/codigo-qr.png")} />
                </Animated.View>
            </TouchableWithoutFeedback>



            <TouchableWithoutFeedback onPress={toggleMenu}>
                <Animated.View style={[styles.button, styles.menu, rotation]}>
                    <Text style={{ fontSize: 35, color: "white" }}>+</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        position: "absolute",
    },
    button: {
        position: "absolute",
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems: "center",
        justifyContent: "center",
        shadowRadius: 10,
        shadowColor: COLORS.SECONDARY,
        shadowOpacity: 0.3,
        shadowOffset: { height: 10 }
    },
    menu: {
        backgroundColor: COLORS.SECONDARY
    },
    secondary: {
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        backgroundColor: "#FFF"
    }
})

export default FloatingButton;