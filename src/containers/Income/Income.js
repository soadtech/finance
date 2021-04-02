import React from 'react';
import { Text, View } from 'react-native';
import Body from '../../commons/Body';
import CustomText from '../../commons/CustomText';
import MainWrapper from '../../commons/MainWrapper';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import { ALIGN, SIZE, WIGHT } from '../../helpers/constants';

const Income = ({ navigation }) => {
    return (
        <MainWrapper>
            <Header back handler={() => navigation.goBack()} title="Los que me deben" />
            <Hero style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View>
                    <CustomText size={SIZE.BIG} color="#000" align={ALIGN.CENTER} weight={WIGHT.SEMI_BOLD}>Total</CustomText>
                    <CustomText size={SIZE.MEDIUM} color="#7f7f7f" align={ALIGN.LEFT} weight={WIGHT.NORMAL}>$100,000</CustomText>
                </View>
                <View>
                    <CustomText size={SIZE.BIG} color="#000" align={ALIGN.LEFT} weight={WIGHT.SEMI_BOLD}>Pagado</CustomText>
                    <CustomText size={SIZE.MEDIUM} color="#7f7f7f" align={ALIGN.CENTER} weight={WIGHT.NORMAL}>$0</CustomText>
                </View>
            </Hero>

            <Body>
                <View>
                    <CustomText size={SIZE.MEDIUM} color="#7f7f7f" align={ALIGN.CENTER} weight={WIGHT.NORMAL}>No hay nada por aqui</CustomText>
                </View>
            </Body>
        </MainWrapper>
    );
}

export default Income;