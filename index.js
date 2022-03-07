/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import MainStack from './Src/globle/navigation/MainStack';
import TobTab from './TobTab';
// import Locate from './android/app/src/screen/Locat/Locate';
import Home from './Src/Screen/Home';
import store from './Src/redux/store/store';
import Splash from './Src/Screen/Splash';
// import Dummy from './Dummy';

AppRegistry.registerComponent(appName, () => Splash);
