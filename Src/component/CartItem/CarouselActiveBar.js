import React from "react";
import { View, StyleSheet, Text, Image, _Text, TouchableOpacity } from "react-native";
import Location from '../../assest/svg/map-pin';
import { DP } from "../../globle/constants";
// import HomeScreen from "../../screens/OTP/Home/HomeScreen";
// import Locate from "../../screen/Locat/Locate";
import LeftArrow from '../../assest/svg/arrow';
import Add from '../../assest/svg/add';
function CarouselActiveBar({ item, activeSlide }) {
    const Color = ["#2d9cdb"]
    const bgcolor = ["#2d9cdb14", "f2994a14", "27ae6014", "#fa5d514"]
    return (
        <View style={styles.ActiveSlideView}>
            {
                item.map((item, index) => {
                    return (
                        index == activeSlide ?
                            <View style={styles.currentActiveSlideStyle}></View>
                            :

                            <View style={styles.activeSlideStyle}></View>

                    )

                })
            }

        </View>

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
        marginHorizontal: DP(25),
        width: DP(12),
        borderRadius: DP(12)
    },
    currentActiveSlideStyle: {
        backgroundColor: "#2d9cdb",
        height: DP(14),
        width: DP(14),
        marginHorizontal: DP(25),
        borderRadius: DP(8),
    },
})
export default CarouselActiveBar;