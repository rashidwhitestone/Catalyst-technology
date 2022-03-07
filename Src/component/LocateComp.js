import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DP } from '../globle/constants'

const LocateComp = ({ item }) => {
    const [temporeryIndex, setTemporeryIndex] = React.useState(0);
    const [isModalVisible, setisModalVisible] = React.useState(false);
    const [forAnimationOut, setforAnimationout] = React.useState(false);



    const toggleModal = ({ }) => {
        setisModalVisible(!isModalVisible);
    }
    return (
        <TouchableOpacity
            delayLongPress={150}


            onPressOut={() => {
                setforAnimationout(true);
            }}
            onLongPress={() => {

                setisModalVisible(true);
            }}
            activeOpacit={0.8}
            style={styles.container}
        >
            <View style={{
                height: DP(100), marginLeft: DP(5), width: DP(100),
                marginHorizontal: DP(2),
            }}>


                <Image
                    resizeMode={"cover"}
                    source={{ uri: item.url }}
                    style={{
                        height: '100%',
                        width: "100%",
                        borderRadius: 16
                    }}
                />

            </View>
            <Text style={{ color: "#747474", }}>
                {item.categeory1}
                <Text style={{ color: "#333333" }}>{item.categeory2}</Text>
            </Text>
        </TouchableOpacity>
    )
}

export default LocateComp

const styles = StyleSheet.create({})
