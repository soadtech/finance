import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image,
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Stepper from 'react-native-stepper-ui';
import HeaderBack from '../../components/HeaderBack';
import { COLORS } from '../../helpers/constants';

const HeaderStepBack = ({ handleBack, active, content }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={handleBack}>
                <Icon name="arrow-left" color="#000" size={30} />
            </TouchableOpacity>
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
                <Text style={styles.titulo}>¿Cual es tu nombre?</Text>
                <Text style={styles.descripcion}>Para saber como llamarte.</Text>
            </View>

            <View style={{ marginTop: 35 }}>
                <TextInput placeholder="Fernando Ropero" />
            </View>
        </View>
    );
};
const StepTwo = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'space-evenly',
            }}>
            <View>
                <Text style={styles.titulo}>Direcciones</Text>
                <Text style={styles.descripcion}>
                    Direcciones donde se realizaran las entregas
        </Text>
            </View>
            <View style={{ marginTop: 35 }}>
                <TextInput label="Origen" placeholder="Carrera 43 #19-100" />
                <TextInput margin label="Destino" placeholder="Carrera 38 #99-10" />
            </View>
        </View>
    );
};

const content = [
    <Step1 title="Component 1" />,
    <Step1 title="Component 2" />,
    <Step1 title="Component 3" />,
    <Step1 title="Component 4" />,
    <Step1 title="Component 5" />,
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
                        step
                        active={active}
                        content={content.length}
                        icon="close"
                        navigation={navigation}
                    />
                ) : (
                    <HeaderStepBack
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
                                ? 'Realizar Servicio'
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