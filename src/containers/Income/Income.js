import React from 'react';
import { Text, View } from 'react-native';
import CustomText from '../../commons/CustomText';
import MainWrapper from '../../commons/MainWrapper';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import { ALIGN, SIZE, WIGHT } from '../../helpers/constants';

const Income = ({ navigation }) => {
    return (
        <MainWrapper>
            <Header back handler={() => navigation.goBack()} />
            <Hero>
                <View>
                    <CustomText size={SIZE.MEDIUM} color="#7f7f7f" align={ALIGN.LEFT} weight={WIGHT.NORMAL}>Hola, Fernando Ropero</CustomText>
                    <CustomText size={SIZE.BIG} color="#000" align={ALIGN.LEFT} weight={WIGHT.SEMI_BOLD}>Buenas noches</CustomText>
                </View>
            </Hero>
        </MainWrapper>
    );
}

export default Income;