import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import Contact from './Contact';
// import TobTab from './TobTab';
import { ThemContext } from './About';

const Dummy = ({ navigation }) => {
    // constructor()
    // {
    //     super()
    //     this.state = {
    //         them: "no them apllied"
    //     }
    // }
    return (
        <View style={styles.container}>
            {/* <TouchableOpacity
            // onPress={
            //     () => {
            //         navigation.navigate('Contact');
            //     }
            // }
            > */}
            <Text>context api </Text>
            <Button onPress={() => { this.setState({ them: "gray them" }) }}>
                <Text>change value</Text>
            </Button>
            <ThemContext.Provider value={this.state.them}>

                <Contact />
            </ThemContext.Provider>
            {/* </TouchableOpacity> */}
        </View>
    )
}

export default Dummy

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
})
