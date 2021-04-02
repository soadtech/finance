import React from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import Body from '../../commons/Body';
import CustomText from '../../commons/CustomText';
import MainWrapper from '../../commons/MainWrapper';
import CardInfoCome from '../../components/CardInfoCome';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import { ALIGN, COLORS, SIZE, WIGHT } from '../../helpers/constants';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const Income = ({ navigation }) => {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    return (
        <MainWrapper>
            <Header back handler={() => navigation.goBack()} title="Los que me deben" />
            <Hero style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View>
                    <CustomText size={SIZE.BIG} color={COLORS.SECONDARY} align={ALIGN.CENTER} weight={WIGHT.SEMI_BOLD}>Total</CustomText>
                    <CustomText size={SIZE.MEDIUM} color={COLORS.PRIMARY} align={ALIGN.LEFT} weight={WIGHT.NORMAL}>$100,000</CustomText>
                </View>
                <View>
                    <CustomText size={SIZE.BIG} color={COLORS.SECONDARY} align={ALIGN.LEFT} weight={WIGHT.SEMI_BOLD}>Pagado</CustomText>
                    <CustomText size={SIZE.MEDIUM} color={COLORS.PRIMARY} align={ALIGN.CENTER} weight={WIGHT.NORMAL}>$0</CustomText>
                </View>
            </Hero>

            <Body>
                <ScrollView showsVerticalScrollIndicator={false} refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }>
                    <View style={{ flex: 1 }}>
                        <CardInfoCome image={require("../../assets/avatar.jpg")} namePeople="Ricardo Albor" prestamo="10,000" total="0,00" titlePrestamo="Recibos" porcentaje="40" />
                        <CardInfoCome image={require("../../assets/avatar.jpg")} namePeople="Ricardo Albor" prestamo="10,000" total="0,00" titlePrestamo="Recibos" porcentaje="90" />
                        <CardInfoCome image={require("../../assets/avatar.jpg")} namePeople="Ricardo Albor" prestamo="10,000" total="0,00" titlePrestamo="Recibos" porcentaje="30" />
                        <CardInfoCome image={require("../../assets/avatar.jpg")} namePeople="Ricardo Albor" prestamo="10,000" total="0,00" titlePrestamo="Recibos" porcentaje="40" />
                        <CardInfoCome image={require("../../assets/avatar.jpg")} namePeople="Ricardo Albor" prestamo="10,000" total="0,00" titlePrestamo="Recibos" porcentaje="60" />
                        <CardInfoCome image={require("../../assets/avatar.jpg")} namePeople="Ricardo Albor" prestamo="10,000" total="0,00" titlePrestamo="Recibos" porcentaje="100" />
                        <CardInfoCome image={require("../../assets/avatar.jpg")} namePeople="Ricardo Albor" prestamo="10,000" total="0,00" titlePrestamo="Recibos" porcentaje="10" />
                        <CardInfoCome image={require("../../assets/avatar.jpg")} namePeople="Ricardo Albor" prestamo="10,000" total="0,00" titlePrestamo="Recibos" porcentaje="20" />
                        <CardInfoCome image={require("../../assets/avatar.jpg")} namePeople="Ricardo Albor" prestamo="10,000" total="0,00" titlePrestamo="Recibos" porcentaje="36" />
                    </View>
                </ScrollView>
            </Body>
        </MainWrapper>
    );
}

export default Income;