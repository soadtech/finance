import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Avatar from '../../commons/Avatar/Avatar';
import CustomText from '../../commons/CustomText';
import MainWrapper from '../../commons/MainWrapper';
import Header from '../../components/Header';
import { ALIGN, COLORS, SIZE, WIGHT } from '../../helpers/constants';
import FloatingButton from "../../components/FloatingButton"

const Home = () => {
    return (
        <MainWrapper>
            <Header />
            <View style={styles.hero}>
                <View>
                    <CustomText size={SIZE.MEDIUM} color="#7f7f7f" align={ALIGN.LEFT} weight={WIGHT.NORMAL}>Hola, Fernando Ropero</CustomText>
                    <CustomText size={SIZE.BIG} color="#000" align={ALIGN.LEFT} weight={WIGHT.SEMI_BOLD}>Good Afternoon</CustomText>
                    <CustomText size={SIZE.SMALL} color="#7f7f7f" align={ALIGN.LEFT} weight={WIGHT.NORMAL}>30 Marzo 2021</CustomText>
                </View>
            </View>

            <View style={styles.body}>
                <FloatingButton style={{ bottom: 100, right: 50 }} />
            </View>
        </MainWrapper>

    );
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: COLORS.BLUE,
        padding: 30,
        justifyContent: "center",
        alignItems: "flex-end"
    },
    hero: {
        flex: 0.2,
        backgroundColor: COLORS.WHITE_LIGHT,
        padding: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    menu: {
        marginLeft: 15,
        borderBottomWidth: 1
    }
})

export default Home;