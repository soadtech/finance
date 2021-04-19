import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomSheet from '@gorhom/bottom-sheet';
import Stepper from 'react-native-stepper-ui';
import HeaderBack from '../../components/HeaderBack';
import { ALIGN, COLORS, SIZE } from '../../helpers/constants';
import CustomText from '../../commons/CustomText';
import CustomInput from '../../commons/CustomInput';
import CustomButtom from '../../commons/CustomButtom/CustomButtom';
import CardItemContact from '../../components/CardItemContact';
import { useDispatch, useSelector } from "react-redux"
import { closeBottomSheetAction, openBottomSheetAction } from '../../store/actions/commonsActions';
import { validateEmpty } from "../../helpers/index"
import { sendRequest, sendPostRequest } from '../../services';
//import StepThree from '../../components/StepThree';


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
const StepOne = ({ title, setTitle }) => {
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
                <CustomInput value={title} action={setTitle} style={{ borderBottomColor: "#000" }} placeholder="Para comprar una hamburguesa" />
            </View>
        </View>
    );
};
const StepTwo = ({ operationAmount, setOperationAmount }) => {
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
                <CustomInput value={operationAmount} action={setOperationAmount} type="number-pad" style={{ borderBottomColor: "#000" }} placeholder="$12,000" />
            </View>
        </View>
    );
};
const StepThree = ({ debtorNumber, setDebtorNumber, getContact, contacts }) => {
    const dispath2 = useDispatch()
    const handlerUpButtomSheet = () => {
        dispath2(openBottomSheetAction())
    }
    useEffect(() => {
        getContact()
    }, [])
    console.log(contacts);
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
                <CustomInput value={debtorNumber} action={setDebtorNumber} type="number-pad" style={{ borderBottomColor: "#000" }} placeholder="Fernando Ropero" />
                <ScrollView>
                    {contacts.map((contact, key) => (
                        <CardItemContact key={key} image={contact.image} name={contact.name} />
                    ))}
                    <View>
                        <CustomButtom handler={handlerUpButtomSheet} style={{ paddingVertical: 10, width: "90%", alignSelf: "center", marginTop: 10, paddingHorizontal: 20 }}>
                            Crear un nuevo deudor
                        </CustomButtom>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};
const StepFour = ({ title, operationAmount, debtorNumber }) => {
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
                <ScrollView>
                    <View>
                        <CustomText color={COLORS.PRIMARY}>{title}</CustomText>
                        <CustomText>{operationAmount}</CustomText>
                        <CustomText>{debtorNumber}</CustomText>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const AddAction = ({ navigation }) => {
    const dispath = useDispatch()
    const [active, setActive] = useState(0);
    const [title, setTitle] = useState("")
    const [operationAmount, setOperationAmount] = useState("")
    const [debtorNumber, setDebtorNumber] = useState("")

    //** STATE TO CONTACT */
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [contacts, setContacts] = useState([])

    const openButtonSheet = useSelector(state => state.commonsReducers.openButtonSheet)
    const numberUser = useSelector(state => state.authReducer.data.user.phone)

    const handlerDownButtomSheet = () => {
        dispath(closeBottomSheetAction())
    }
    // ref
    const bottomSheetRef = React.useRef(null);

    // variables
    const snapPoints = React.useMemo(() => ['25%', '100%'], [bottomSheetRef]);

    // callbacks
    const handleSheetChanges = React.useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, [bottomSheetRef]);

    const getContact = async () => {
        const result = await sendRequest(`/admin/contacts/${numberUser}`, {})
        if (!result.success) {
            Alert.alert(result.message)
            return
        }
        setContacts(result.data.contacts)
    }

    const content = [
        <StepOne title="Component 1" title={title} setTitle={setTitle} />,
        <StepTwo title="Component 3" operationAmount={operationAmount} setOperationAmount={setOperationAmount} />,
        <StepThree title="Component 4" contacts={contacts} getContact={getContact} debtorNumber={debtorNumber} setDebtorNumber={setDebtorNumber} />,
        <StepFour title="Component 5" title={title} operationAmount={operationAmount} debtorNumber={debtorNumber} />,
    ];



    const handleCreateContact = async () => {
        const err = validateEmpty({ name, number, email, pass })
        if (Object.keys(err).length > 0) {
            setErrors(err)
            Alert.alert("Todos los campos son obligatorios")
            return
        }

        try {
            const result = await sendPostRequest("/admin/contacts", { name, number, email, pass, creatorPhone: numberUser }, {})
            if (!result.success) {
                Alert.alert(result.message)
                return
            }
            handlerDownButtomSheet()
            getContact()
            console.log(result)
        } catch (error) {
            Alert.alert(error.message)
        }
    }

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
            {openButtonSheet && (
                <BottomSheet
                    ref={bottomSheetRef}
                    index={1}
                    snapPoints={snapPoints}
                    onChange={handleSheetChanges}
                    style={{ backgroundColor: COLORS.BLUE, flex: 1 }}
                    topInset={30}
                >
                    <View style={{ backgroundColor: COLORS.BLUE, flex: 1, paddingHorizontal: 20 }}>
                        <CustomText color={COLORS.PRIMARY} size={SIZE.BIG} align={ALIGN.CENTER}>Creando contacto</CustomText>

                        <CustomInput value={name} action={setName} label="Nombre" type="number-pad" style={{ borderBottomColor: "#000" }} placeholder="Fernando Ropero" />
                        <CustomInput value={number} action={setNumber} label="Numero de telefono" type="number-pad" style={{ borderBottomColor: "#000" }} placeholder="3002111252" />
                        <CustomInput value={email} action={setEmail} label="Email" type="number-pad" style={{ borderBottomColor: "#000" }} placeholder="nose@correo.com" />
                        <CustomInput value={pass} action={setPass} label="Clave de seguridad" type="number-pad" style={{ borderBottomColor: "#000" }} placeholder="1234" />

                        <View>
                            <CustomButtom handler={handleCreateContact} style={{ paddingVertical: 10, width: "90%", alignSelf: "center", marginTop: 10, paddingHorizontal: 20 }}>
                                Crear un nuevo deudor
                            </CustomButtom>
                        </View>
                        <View>
                            <TouchableOpacity onPress={handlerDownButtomSheet} style={{ paddingVertical: 10, width: "90%", alignSelf: "center", marginTop: 10, paddingHorizontal: 20 }}>
                                <Text style={{ textAlign: "center" }}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </BottomSheet>
            )}
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