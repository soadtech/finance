import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import CustomButtom from '../../commons/CustomButtom/CustomButtom';
import CustomInput from '../../commons/CustomInput';
import CardItemContact from '../CardItemContact';
import { useDispatch, } from "react-redux"
import { openBottomSheetAction } from '../../store/actions/commonsActions';

const StepThree = () => {
    const dispath = useDispatch()
    const handlerUpButtomSheet = () => {
        dispath(openBottomSheetAction())
    }
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
                        <CustomButtom handler={handlerUpButtomSheet} style={{ paddingVertical: 10, width: "90%", alignSelf: "center", marginTop: 10, paddingHorizontal: 20 }}>
                            Crear un nuevo deudor
                        </CustomButtom>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 38,
        fontWeight: '700',
    },
    descripcion: {
        fontSize: 20,
    },

});

export default StepThree;