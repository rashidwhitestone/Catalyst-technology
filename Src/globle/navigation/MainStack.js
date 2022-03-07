import React from 'react'
//Stacks
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// import Locate from '../../Screen/Locat/Locate';
// import Login from '../../Screen/Login';
import Splash from '../../Screen/Splash'
const Stack = createStackNavigator();

function MainStack() {
    return (
        <NavigationContainer>

            <Stack.Navigator  >
                {/* <Stack.Screen
                    name="Dummy"r
                    component={Dummy}
                /> */}
                {/* <Stack.Screen
                    name="Contact" component={Contact}
                /> */}
                {/* <Stack.Screen
                    name="About"
                    component={About}
                />
                <Stack.Screen
                    name="TobTab"
                    component={TobTab}
                /> */}

                {/* <Stack.Screen
                    name={PICK}
                    component={Pick}
                />  */}

                <Stack.Screen
                    name="Splash"
                    component={Splash}
                />

            </Stack.Navigator>
        </NavigationContainer>

    )
}
export default MainStack;