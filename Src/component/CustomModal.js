import React from 'react'
import { StyleSheet, Text, View, Modal } from 'react-native'

const CustomModal = (visibility, editModal) => {
    return (
        <Modal
            transparent={true}
            visible={visibility}
            onRequestClose={editModal}
        >
            <View style={{ flex: 1, backgroundColor: 'black', justifyContent: "center" }}>
                <View style={{ height: 100, width: 100, backgroundColor: 'red' }}>

                    <Text>mario</Text>
                </View>
            </View>
        </Modal >
    )
}

export default CustomModal

const styles = StyleSheet.create({})
