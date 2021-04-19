import React, { useEffect } from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import Body from '../../commons/Body';
import CustomText from '../../commons/CustomText';
import MainWrapper from '../../commons/MainWrapper';
import CardInfoCome from '../../components/CardInfoCome';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import { ALIGN, COLORS, SIZE, WIGHT } from '../../helpers/constants';
import { useSelector } from "react-redux"
import { sendRequest } from '../../services';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const Income = ({ navigation }) => {
    const [refreshing, setRefreshing] = React.useState(false);
    const [incomes, setIncomes] = React.useState([]);
    const numberUser = useSelector(state => state.authReducer.data.user.phone)

    const getIncomes = async () => {
        const result = await sendRequest(`/admin/transaction?creatorPhone=${numberUser}&type=1`, {})
        if (!result.success) {
            Alert.alert(result.message)
            return
        }
        setIncomes(result.data.transactions)
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        getIncomes().then(() => setRefreshing(false));
    }, []);

    useEffect(() => {

        getIncomes()
    }, [])
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
                        {incomes.map(income => (
                            <CardInfoCome key={income.transaction.id} image={income.contact.image} namePeople={income.contact.name} prestamo={income.transaction.operationAmount} total={income.transaction.totalPaid} titlePrestamo={income.transaction.title} porcentaje="0" />
                        ))}

                    </View>
                </ScrollView>
            </Body>
        </MainWrapper>
    );
}

export default Income;