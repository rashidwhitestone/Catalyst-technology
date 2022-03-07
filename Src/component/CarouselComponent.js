
import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Fonts } from '../globle';
import { DP } from '../globle/constants';
// import { DP, SCREEN_WIDTH } from 'global/constants'
// import { Colors } from 'global/'
// import { Fonts } from 'global/'

function CarouselComponent({ item }) {
    return (
        <View style={{ alignSelf: 'center' }}>
            <Image
                source={{ uri: item.imageUrl }}
                style={styles.imageCarousel}
            >
            </Image >
            <Text style={{ height: DP(40), width: DP(200), alignSelf: 'center', textAlign: 'center', marginTop: DP(50), }}>
                {item.type}
            </Text>
            <Text style={{ height: DP(60), width: DP(350), alignSelf: 'center', textAlign: 'center', marginTop: DP(35), }}>
                {item.description}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    imageCarousel: {
        height: DP(190),
        // marginHorizontal: DP(10),
        width: DP(300),
        alignSelf: 'center',
        borderRadius: DP(10),
        marginTop: DP(25),
    },

})
export default CarouselComponent;