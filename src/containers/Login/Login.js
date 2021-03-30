import React from 'react'
import { Text, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import CustomButtom from '../../commons/CustomButtom/CustomButtom';
import CustomInput from '../../commons/CustomInput';
import CustomText from '../../commons/CustomText';
import MainWrapper from '../../commons/MainWrapper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ALIGN, SIZE, WIGHT } from '../../helpers/constants';

const Login = (props) => {

    const handleLogin = () => {
        props.navigation.navigate("home")
    }
    return (
        <MainWrapper>
            {/* <View style={{ flex: 0.7 }}></View> */}
            <KeyboardAwareScrollView style={{ flex: 1, flexDirection: "column-reverse", paddingBottom: 20 }}>
                <View style={{ flex: 1 }}>
                    <View>
                        <CustomText>Welcome</CustomText>
                        <CustomText>back!</CustomText>
                    </View>
                    <View style={{ flex: 1 }}>
                        <CustomInput label="E-mail" placeholder="Email" />
                        <CustomInput label="Password" placeholder="Password" />
                        <CustomText color="gray" size={SIZE.SMALL} align={ALIGN.RIGHT} weight={WIGHT.NORMAL}>Forgot password?</CustomText>
                    </View>
                    <View style={{ flex: 1, marginTop: 30 }}>
                        <CustomButtom handler={handleLogin}>Sign in</CustomButtom>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </MainWrapper>
    );
}

const styles = StyleSheet.create({

})

export default Login;