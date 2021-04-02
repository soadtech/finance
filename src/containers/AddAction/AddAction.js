import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native';
import Avatar from "../../commons/Avatar"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Stepper from 'react-native-stepper-ui';
import HeaderBack from '../../components/HeaderBack';
import { ALIGN, COLORS, SIZE } from '../../helpers/constants';
import CustomText from '../../commons/CustomText';
import CustomInput from '../../commons/CustomInput';
import CustomButtom from '../../commons/CustomButtom/CustomButtom';
import MainWrapper from '../../commons/MainWrapper/MainWrapper';
import CardItemContact from '../../components/CardItemContact';

const HeaderStepBack = ({ handleBack, active, content, tittle }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={handleBack}>
                <Icon name="arrow-left" color="#000" size={30} />
            </TouchableOpacity>
            <CustomText color={COLORS.PRIMARY} size={SIZE.MEDIUM} align={ALIGN.CENTER}>{tittle}</CustomText>
            <Text>
                Step {active + 1} de {content}
            </Text>
        </View>
    );
};

const Step1 = (props) => {
    return (
        <View>
            <View>
                <Text>Select Category</Text>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text>Hola</Text>
                </View>
            </View>
            <View>
                <Text>Select Category</Text>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text>Hola</Text>
                </View>
            </View>
        </View>
    );
};
const StepOne = () => {
    return (
        <View
            style={{
                justifyContent: 'space-between',
            }}>
            <View>
                <Text style={styles.titulo}>Titulo del prestamo</Text>
                <Text style={styles.descripcion}>Para saber como llamarte.</Text>
            </View>

            <View style={{ marginTop: 35 }}>
                <CustomInput style={{ borderBottomColor: "#000" }} placeholder="Para comprar una hamburguesa" />
            </View>
        </View>
    );
};
const StepTwo = () => {
    return (
        <View
            style={{
                justifyContent: 'space-between',
            }}>
            <View>
                <Text style={styles.titulo}>Monto del prestamo</Text>
                <Text style={styles.descripcion}>Para saber como llamarte.</Text>
            </View>

            <View style={{ marginTop: 35 }}>
                <CustomInput type="number-pad" style={{ borderBottomColor: "#000" }} placeholder="$12,000" />
            </View>
        </View>
    );
};
const StepThree = () => {
    return (
        <View
            style={{
                justifyContent: 'space-between',
            }}>
            <View>
                <Text style={styles.titulo}>Deudor</Text>
                <Text style={styles.descripcion}>Para saber como llamarte.</Text>
            </View>

            <View style={{ marginTop: 35 }}>
                <CustomInput type="number-pad" style={{ borderBottomColor: "#000" }} placeholder="Fernando Ropero" />
                <ScrollView>
                    <CardItemContact />
                    <CardItemContact />
                    <View>
                        <CustomButtom style={{ paddingVertical: 10, width: "90%", alignSelf: "center", marginTop: 10, paddingHorizontal: 20 }}>
                            Crear un nuevo deudor
                        </CustomButtom>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};
const StepFour = () => {
    return (
        <View
            style={{
                justifyContent: 'space-between',
            }}>
            <View>
                <Text style={styles.titulo}>Resumen</Text>
                <Text style={styles.descripcion}>Para saber como llamarte.</Text>
            </View>

            <View style={{ marginTop: 35 }}>
                <CustomInput type="number-pad" style={{ borderBottomColor: "#000" }} placeholder="Fernando Ropero" />
                <ScrollView>
                    <CardItemContact />
                    <CardItemContact />
                    <View>
                        <CustomButtom style={{ paddingVertical: 10, width: "90%", alignSelf: "center", marginTop: 10, paddingHorizontal: 20 }}>
                            Crear un nuevo deudor
                        </CustomButtom>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};


const content = [
    <StepOne title="Component 1" />,
    <StepTwo title="Component 3" />,
    <StepThree title="Component 4" />,
    <StepFour title="Component 5" />,
];

const AddAction = ({ navigation }) => {
    const [active, setActive] = useState(0);

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                enabled={false}>
                {active === 0 ? (
                    <HeaderBack
                        tittle="Nuevo prestamo"
                        step
                        active={active}
                        content={content.length}
                        icon="close"
                        navigation={navigation}
                    />
                ) : (
                    <HeaderStepBack
                        tittle="Nuevo prestamo"
                        active={active}
                        content={content.length}
                        handleBack={() => setActive(active - 1)}
                    />
                )}

                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                    <View style={{ marginTop: 10 }}>
                        <Stepper
                            active={active}
                            wrapperStyle={{ borderWidth: 0 }}
                            stepStyle={{
                                width: 50,
                                height: 5,
                                display: "none"
                            }}
                            content={content}
                            showButton={false}
                            onBack={() => setActive((p) => p - 1)}
                            onFinish={() => alert('Finish')}
                            onNext={() => setActive((p) => p + 1)}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => setActive(active + 1)}
                        style={{
                            borderRadius: 10,
                            backgroundColor: COLORS.PRIMARY,
                            paddingVertical: 20,
                            marginTop: 15,
                        }}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>
                            {active === content.length - 1
                                ? 'Realizar prestamo'
                                : 'Continuar'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'white',
    },
    titulo: {
        fontSize: 38,
        fontWeight: '700',
    },
    descripcion: {
        fontSize: 20,
    },
    inputForm: {
        backgroundColor: '#f4f4f7',
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 18,
        fontWeight: '700',
    },
});
export default AddAction;