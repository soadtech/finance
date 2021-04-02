import React from 'react';
import { Image, Text, View } from 'react-native';
import Avatar from '../../commons/Avatar/Avatar';
import CustomText from '../../commons/CustomText';
import { ALIGN, COLORS, SIZE, WIGHT } from '../../helpers/constants';

const CardInfoCome = ({ image, namePeople, prestamo, total, titlePrestamo, porcentaje }) => {
    return (
        <View style={{ backgroundColor: COLORS.WHITE_LIGHT, padding: 10, borderRadius: 10, marginBottom: 10 }}>
            <View style={{ flexDirection: "row" }}>
                <Avatar src={image} />
                <View style={{ flex: 1 }}>
                    <CustomText size={SIZE.MEDIUM} color={COLORS.PRIMARY} align={ALIGN.CENTER} weight={WIGHT.SEMI_BOLD}>{namePeople}</CustomText>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flex: 1 }}>
                            <CustomText size={SIZE.SMALL} color={COLORS.SECONDARY} align={ALIGN.CENTER} weight={WIGHT.SEMI_BOLD}>Prestamo</CustomText>
                            <CustomText size={SIZE.SMALL} color={COLORS.PRIMARY} align={ALIGN.CENTER} weight={WIGHT.NORMAL}>${prestamo}</CustomText>
                        </View>
                        <View style={{ flex: 1 }}>
                            <CustomText size={SIZE.SMALL} color={COLORS.SECONDARY} align={ALIGN.CENTER} weight={WIGHT.SEMI_BOLD}>Total</CustomText>
                            <CustomText size={SIZE.SMALL} color={COLORS.PRIMARY} align={ALIGN.CENTER} weight={WIGHT.NORMAL}>${total}</CustomText>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20, width: "80%", alignSelf: "center", alignItems: "center" }}>
                <View>
                    <Image style={{ width: 30, height: 30 }} resizeMode="contain" source={require("../../assets/efectivo.png")} />
                </View>
                <View>
                    <CustomText size={SIZE.SMALL} color={COLORS.PRIMARY} align={ALIGN.CENTER} weight={WIGHT.NORMAL}>{titlePrestamo}</CustomText>
                    <View style={{ flexDirection: "row" }}>
                        <CustomText size={SIZE.SMALL} color={COLORS.PRIMARY} align={ALIGN.CENTER} weight={WIGHT.SEMI_BOLD}>Prestamo:</CustomText>
                        <CustomText size={SIZE.SMALL} color={COLORS.PRIMARY} align={ALIGN.CENTER} weight={WIGHT.NORMAL}> ${prestamo}</CustomText>
                    </View>
                    <View style={{ backgroundColor: COLORS.BLUE, width: "100%", height: 4, borderRadius: 10, marginVertical: 5, position: "relative" }}>
                        <View style={{ backgroundColor: COLORS.SECONDARY, width: `${porcentaje}%`, height: 4, borderRadius: 10, marginVertical: 5, position: "absolute", top: -5 }}>

                        </View>
                    </View>
                </View>
                <View>
                    <Image style={{ width: 30, height: 30 }} resizeMode="contain" source={require("../../assets/right-arrow.png")} />
                </View>
            </View>
        </View>
    );
}

export default CardInfoCome;