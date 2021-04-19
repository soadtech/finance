import React, { useState } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native';
import CustomButtom from '../../commons/CustomButtom/CustomButtom';
import CustomInput from '../../commons/CustomInput';
import CustomText from '../../commons/CustomText';
import MainWrapper from '../../commons/MainWrapper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ALIGN, SIZE, WIGHT } from '../../helpers/constants';
import { validateEmpty } from '../../helpers';
import { sendPostRequest } from '../../services';
import { useDispatch } from "react-redux"
import { loginAction } from '../../store/actions/userAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
    const dispatch = useDispatch()
    const [errors, setErrors] = useState({})
    const [email, setEmail] = useState("fernandojoseropero@gmail.com")
    const [password, setPassword] = useState("123456")

    const handleLogin = async () => {
        const err = validateEmpty({ email, password })
        if (Object.keys(err).length > 0) {
            setErrors(err)
            Alert.alert("Todos los campos son obligatorios")
            return
        }
        setErrors({})
        try {
            const result = await sendPostRequest("/auth/login", { email, password }, {})
            if (!result.success) {
                Alert.alert(result.message)
                return
            }
            try {
                await AsyncStorage.removeItem('@token')
                await AsyncStorage.setItem('@token', JSON.stringify(result.data))
            } catch (e) {
                // saving error
            }
            dispatch(loginAction(result.data))
            navigation.navigate("Home")
        } catch (error) {
            Alert.alert(error)
            setErrors({})
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
                    <View style={{ flex: 1, marginTop: 30 }}>
                        <CustomText action={() => navigation.navigate("Register")} size={SIZE.SMALL}>You do not have an account?</CustomText>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </MainWrapper>
    );
}

const styles = StyleSheet.create({

})

export default Login;