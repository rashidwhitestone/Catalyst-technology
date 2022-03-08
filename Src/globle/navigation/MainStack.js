import React from 'react'
//Stacks
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Splash from '../../Screen/Splash'
const Stack = createStackNavigator();

function MainStack() {
    return (
        <NavigationContainer>

            <Stack.Navigator  >
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                />

            </Stack.Navigator>
        </NavigationContainer>

    )
}
export default MainStack;