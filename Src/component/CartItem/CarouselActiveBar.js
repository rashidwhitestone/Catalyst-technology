import React from "react";
import { View, StyleSheet, Text, Image, _Text, TouchableOpacity } from "react-native";
import Location from '../../assest/svg/map-pin';
import { DP } from "../../globle/constants";
// import HomeScreen from "../../screens/OTP/Home/HomeScreen";
// import Locate from "../../screen/Locat/Locate";
import Add from '../../assest/svg/add';
import ArrowR from '../../assest/svg/arrow-right';
function CarouselActiveBar({ item, activeSlide, navigation }) {
    const Color = ["#2d9cdb"]
    const bgcolor = ["#2d9cdb14", "f2994a14", "27ae6014", "#fa5d514"]
    return (
        <>
            <View style={styles.ActiveSlideView}>
                {
                    item.map((item, index) => {
                        return (
                            <>
                                {
                                    index == activeSlide ?
                                        <View style={styles.currentActiveSlideStyle}></View>
                                        :

                                        <View style={styles.activeSlideStyle}></View>
                                }

                            </>

                        )

                    })
                }


            </View >
            {
                activeSlide == 4 &&
                < TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => { navigation.navigate("Home") }}
                    style={{
                        height: DP(40), width: DP(40), backgroundColor: '#2d9cdb', borderRadius: DP(20),
                        justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end', marginTop: DP(-28)
                    }}>
                    <ArrowR />

                </TouchableOpacity>
            }
        </>

    );

}
const styles = StyleSheet.create({

    ActiveSlideView: {
        alignSelf: 'center',
        // marginTop: DP(25),
        height: DP(12),
        // backgroundColor: '#80808040',
        backgroundColor: '#fff',
        borderRadius: DP(2),

        // marginHorizontal: DP(10),
        flexDirection: 'row',
    },
    activeSlideStyle: {
        alignSelf: 'center',
        backgroundColor: '#80808040',
        // backgroundColor: '#fff',
        height: DP(12),
        marginHorizontal: DP(10),
        width: DP(12),
        borderRadius: DP(12)
    },
    currentActiveSlideStyle: {
        backgroundColor: "#2d9cdb",
        height: DP(14),
        width: DP(14),
        marginHorizontal: DP(10),
        borderRadius: DP(8),
    },
})
export default CarouselActiveBar;