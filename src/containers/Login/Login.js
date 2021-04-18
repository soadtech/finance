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

const Login = ({ navigation }) => {
    const [errors, setErrors] = useState({})
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async () => {
        const err = validateEmpty({ email, password })
        if (Object.keys(err).length > 0) {
            setErrors(err)
            Alert.alert("Todos los campos son obligatorios")
            return
        }
        setErrors({})
        try {
            const data = await sendPostRequest("/auth/login", { email, password }, {})
            if (!data.success) {
                Alert.alert(data.message)
                return
            }
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
                        <CustomInput action={setEmail} label="E-mail" placeholder="Email" />
                        <CustomInput action={setPassword} label="Password" placeholder="Password" />
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