import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CustomText from '../../commons/CustomText';
import MainWrapper from '../../commons/MainWrapper';
import Header from '../../components/Header';
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
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <CustomText color="#000" align={ALIGN.LEFT}>Statistics</CustomText>
                    <CustomText size={SIZE.SMALL} color={COLORS.SECONDARY} align={ALIGN.LEFT}>See all</CustomText>
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
        padding: 30
    }
})
export default Home;