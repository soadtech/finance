import React, { useState } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native';
import CustomButtom from '../../commons/CustomButtom/CustomButtom';
import CustomInput from '../../commons/CustomInput';
import CustomText from '../../commons/CustomText';
import MainWrapper from '../../commons/MainWrapper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ALIGN, SIZE, WIGHT } from '../../helpers/constants';
import { sendPostRequest } from '../../utils/service';
import { loginAction } from '../../store/actions/userAction';
import { useDispatch } from "react-redux"

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const handleLogin = async () => {

        try {
            dispatch(loginAction({ correo: "hola" }))

            // const result = await sendPostRequest("/auth/login", { email, password })
            // console.log("aaa", result);
            // return navigation.navigate("Home")
        } catch (error) {
            Alert.alert(error)
        }

    }
    return (
        <MainWrapper login>
            {/* <View style={{ flex: 0.7 }}></View> */}
            <KeyboardAwareScrollView style={{ flex: 1, flexDirection: "column-reverse", paddingBottom: 20 }}>
                <View style={{ flex: 1, paddingHorizontal: 20 }}>
                    <View>
                        <CustomText>Welcome</CustomText>
                        <CustomText>back!</CustomText>
                    </View>
                    <View style={{ flex: 1 }}>
                        <CustomInput value={email} action={setEmail} label="E-mail" placeholder="Email" />
                        <CustomInput value={password} action={setPassword} label="Password" placeholder="Password" />
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