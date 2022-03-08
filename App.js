import React from 'react'
import { store } from './Src/redux/store/store';
import { Provider } from 'react-redux';
import Home from './Src/Screen/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenNames } from './Src/globle';
import Splash from './Src/Screen/Splash';

const App = () => {
    const Stack = createStackNavigator()
    const initialRouteName = ScreenNames.SPLASH
    const showHeader = false

    return (
        <NavigationContainer>
            <Stack.Navigator screenOption={{ headerShown: showHeader }}
                initialRouteName={initialRouteName}
            >
                <Stack.Screen name={ScreenNames.SPLASH} component={Splash} />
                <Stack.Screen name={ScreenNames.HOME} component={Home} />

            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default App

