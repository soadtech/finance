import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Avatar from '../../commons/Avatar/Avatar';
import CustomText from '../../commons/CustomText';
import MainWrapper from '../../commons/MainWrapper';
import Header from '../../components/Header';
import { ALIGN, COLORS, SIZE, WIGHT } from '../../helpers/constants';
import CardStatis from '../../components/CardStatis/CardStatis';
import FloatingButton from "../../components/FloatingButton"
import * as Icons from '../../commons/Icons'
import moment from "moment"
import CardPeople from '../../components/CardPeople/CardPeople';
moment.locale('es');

const Home = () => {
    const [today, setToday] = useState(moment().format('LL'))
    // useEffect(() => {
    //     setInterval(() => {
    //         setToday(moment().format('LTS'))
    //     }, 1000)
    // }, [])
    return (
        <MainWrapper>
            <Header />
            <View style={styles.hero}>
                <View>
                    <CustomText size={SIZE.MEDIUM} color="#7f7f7f" align={ALIGN.LEFT} weight={WIGHT.NORMAL}>Hola, Fernando Ropero</CustomText>
                    <CustomText size={SIZE.BIG} color="#000" align={ALIGN.LEFT} weight={WIGHT.SEMI_BOLD}>Buenas noches</CustomText>
                    <CustomText size={SIZE.SMALL} color="#7f7f7f" align={ALIGN.LEFT} weight={WIGHT.NORMAL}>{today}</CustomText>
                </View>
            </View>

            <View style={styles.body}>
                <View style={{ flex: 1 }}>

                    <CardStatis ico={<Icons.SvgGraphOne />} color="#fff" title="Prestamos" cant="100,000" background={COLORS.SECONDARY} />
                    <CardStatis ico={<Icons.SvgGraphTwo />} color="#000" title="Deudas" cant="23,600" background={COLORS.WHITE} />
                </View>

                <View style={{ flex: 1.5 }}>
                    <CustomText size={SIZE.MEDIUM} color="#000" align={ALIGN.LEFT}>Transacciones recientes</CustomText>
                    <View>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ marginTop: 10, paddingVertical: 15 }}>
                            <CardPeople name="Ricardo Albord" photo={require("../../assets/avatar.jpg")} cant="100.000" date={moment().format("LLL")} typeCant="+" style={{ marginLeft: 10 }} />
                            <CardPeople name="Fernando Ropero" photo={require("../../assets/avatar.jpg")} cant="23.600" date={moment().format("LLL")} typeCant="-" style={{ marginLeft: 10 }} />
                        </ScrollView>
                    </View>
                </View>

                <FloatingButton style={{ bottom: 80, right: 50 }} />
            </View>
        </MainWrapper>

    );
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: COLORS.BLUE,
        padding: 20,
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