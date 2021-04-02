import React from 'react';
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
    return (
        <MainWrapper>
            <Header />
            <View style={styles.hero}>
                <View>
                    <CustomText size={SIZE.MEDIUM} color="#7f7f7f" align={ALIGN.LEFT} weight={WIGHT.NORMAL}>Hola, Fernando Ropero</CustomText>
                    <CustomText size={SIZE.BIG} color="#000" align={ALIGN.LEFT} weight={WIGHT.SEMI_BOLD}>Good Afternoon</CustomText>
                    <CustomText size={SIZE.SMALL} color="#7f7f7f" align={ALIGN.LEFT} weight={WIGHT.NORMAL}>{moment().format("LL")}</CustomText>
                </View>
            </View>

            <View style={styles.body}>
                <View style={{ flex: 1 }}>
                    <CustomText color="#000" align={ALIGN.LEFT}>Statistics</CustomText>
                    <CardStatis ico={<Icons.SvgGraphOne />} color="#fff" title="Income" cant="7,298" background={COLORS.SECONDARY} />
                    <CardStatis ico={<Icons.SvgGraphTwo />} color="#000" title="Outcome" cant="1,298" background={COLORS.WHITE} />
                </View>

                <View style={{ flex: 1 }}>
                    <CustomText size={SIZE.MEDIUM} color="#000" align={ALIGN.LEFT}>Your recent transactions</CustomText>
                    <View>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ marginTop: 10, paddingVertical: 13 }}>
                            <CardPeople style={{ marginLeft: 10 }} />
                            <CardPeople style={{ marginLeft: 10 }} />
                            <CardPeople style={{ marginLeft: 10 }} />
                        </ScrollView>
                    </View>
                </View>






                <FloatingButton style={{ bottom: 100, right: 50 }} />
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