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

const Register = ({ navigation }) => {
    const [errors, setErrors] = useState({})
    const [email, setEmail] = useState("fernandojoseropero@gmail.com")
    const [password, setPassword] = useState("123456")
    const [name, setName] = useState("Fernando ropero")
    const [phone, setPhone] = useState("3022435396")

    const handleLogin = async () => {
        const err = validateEmpty({ email, password, name, phone })
        if (Object.keys(err).length > 0) {
            setErrors(err)
            Alert.alert("Todos los campos son obligatorios")
            return
        }
        setErrors({})
        try {
            const data = await sendPostRequest("/auth/signup", { email, password, name, phone }, {})
            if (!data.success) {
                console.log(data);
                Alert.alert(data.message)
                return
            }
            navigation.navigate("Login")
        } catch (error) {
            console.log("llego aki", error);
            //Alert.alert(error),
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
                        <CustomInput value={name} action={setName} label="Name" placeholder="Name" />
                        <CustomInput value={email} action={setEmail} label="Email" placeholder="Email" />
                        <CustomInput value={phone} action={setPhone} label="Phone" placeholder="Phone" />
                        <CustomInput value={password} action={setPassword} label="Password" placeholder="Password" />
                        <CustomText color="gray" size={SIZE.SMALL} align={ALIGN.RIGHT} weight={WIGHT.NORMAL}>Forgot password?</CustomText>
                    </View>
                    <View style={{ flex: 1, marginTop: 30 }}>
                        <CustomButtom handler={handleLogin}>Sign up</CustomButtom>
                    </View>
                    <View style={{ flex: 1, marginTop: 30 }}>
                        <CustomText action={() => navigation.navigate("Login")} size={SIZE.SMALL}>Do you already have an account?</CustomText>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </MainWrapper>
    );
}

const styles = StyleSheet.create({

})

export default Register;