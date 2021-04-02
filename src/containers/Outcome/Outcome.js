import React from 'react';
import { Text, View } from 'react-native';
import MainWrapper from '../../commons/MainWrapper';
import Header from '../../components/Header';

const Outcome = ({ navigation }) => {
    return (
        <MainWrapper>
            <Header back handler={() => navigation.goBack()} />
        </MainWrapper>
    );
}

export default Outcome;