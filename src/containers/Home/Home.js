import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Avatar from '../../commons/Avatar/Avatar';
import CustomText from '../../commons/CustomText';
import MainWrapper from '../../commons/MainWrapper';
import CardStatis from '../../components/CardStatis/CardStatis';
import Header from '../../components/Header';
import * as Icons from '../../commons/Icons'
import { ALIGN, COLORS, SIZE, WIGHT } from '../../helpers/constants';

const Home = () => {
    return (
        <MainWrapper>
            <Header />
            <View style={{ flex: 0.2 }}>
                <Text style={{ textAlign: "center", fontSize: SIZE.MEDIUM, color: "#D3C9C7", fontWeight: WIGHT.NORMAL }}>Total balance</Text>
                <Text style={{ textAlign: "center", color: "white", fontSize: SIZE.BIG, fontWeight: WIGHT.SEMI_BOLD }}>$12,698</Text>
            </View>

            <View style={styles.body}>
                <View style={{ flex: 0.3, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <CustomText color="#000" align={ALIGN.LEFT}>Estadisticas</CustomText>
                    <CustomText size={SIZE.SMALL} color={COLORS.SECONDARY} align={ALIGN.LEFT}>See all</CustomText>
                </View>
                <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                    <CardStatis ico={<Icons.SvgGraphOne />} color="#fff" title="Income" cant="7,298" background={COLORS.SECONDARY} />
                    <CardStatis ico={<Icons.SvgGraphTwo />} color="#000" title="Outcome" cant="1,298" background={COLORS.WHITE} />
                </View>
                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <CustomText size={SIZE.MEDIUM} color="#000" align={ALIGN.LEFT}>Your transactions</CustomText>
                        <CustomText size={SIZE.SMALL} color={COLORS.SECONDARY} align={ALIGN.LEFT}>See all</CustomText>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <View style={{ backgroundColor: "white", padding: 20, borderRadius: 15, elevation: 3 }}>
                            <View style={{ alignSelf: 'center' }}>
                                <Avatar src={require('../../assets/avatar.jpg')} />
                                <CustomText color="#000" size={SIZE.SMALL}>Oscar Wilson</CustomText>
                            </View>
                            <View style={{ height: 30 }}>

                            </View>
                            <View>
                                <CustomText align={ALIGN.LEFT} color="#000" size={SIZE.MEDIUM} weight={WIGHT.SEMI_BOLD}>+$2,321</CustomText>
                                <CustomText color="#cecece" size={SIZE.SMALL} weight={WIGHT.NORMAL}>20 Mar, 6:21 AM</CustomText>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </MainWrapper>
    );
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "white",
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        padding: 30,
        justifyContent: 'space-between'
    }
})
export default Home;