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
import Hero from '../../components/Hero';
import Body from '../../commons/Body';
moment.locale('es');

const Home = ({ navigation }) => {
    const [today, setToday] = useState(moment().format('LL'))
    // useEffect(() => {
    //     setInterval(() => {
    //         setToday(moment().format('LTS'))
    //     }, 1000)
    // }, [])
    const handleGoIncomes = () => {
        navigation.navigate("Income")
    }
    const handleGoOutcomes = () => {
        navigation.navigate("Outcome")
    }

    return (
        <MainWrapper>
            <Header />
            <Hero>
                <View>
                    <CustomText size={SIZE.MEDIUM} color="#7f7f7f" align={ALIGN.LEFT} weight={WIGHT.NORMAL}>Hola, Fernando Ropero</CustomText>
                    <CustomText size={SIZE.BIG} color="#000" align={ALIGN.LEFT} weight={WIGHT.SEMI_BOLD}>Buenas noches</CustomText>
                    <CustomText size={SIZE.SMALL} color="#7f7f7f" align={ALIGN.LEFT} weight={WIGHT.NORMAL}>{today}</CustomText>
                </View>
            </Hero>

            <Body>
                <View style={{ flex: 1 }}>

                    <CardStatis handler={handleGoIncomes} ico={<Icons.SvgGraphOne />} color="#fff" title="Prestamos" cant="100,000" background={COLORS.SECONDARY} />
                    <CardStatis handler={handleGoOutcomes} ico={<Icons.SvgGraphTwo />} color="#000" title="Deudas" cant="23,600" background={COLORS.WHITE} />
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

                <FloatingButton navigation={navigation} style={{ bottom: 80, right: 50 }} />
            </Body>
        </MainWrapper>

    );
}
const styles = StyleSheet.create({
    menu: {
        marginLeft: 15,
        borderBottomWidth: 1
    }
})

export default Home;