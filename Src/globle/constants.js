import { Dimensions } from "react-native";

export const SCREEN_HIGHT = Dimensions.get('screen').height;
export const SCREEN_WIDTH = Dimensions.get('screen').width;
const MOCKUP_WIDTH = 414;
const MOCKUP_WIDTH_INS = 375;
export const DP = (temp) => (SCREEN_WIDTH / (MOCKUP_WIDTH / temp));