var _a;
import { Dimensions, StatusBar, Platform } from 'react-native';
import { isIphoneX, getBottomSpace } from 'react-native-iphone-x-helper';
var isIOS = Platform.OS === 'ios';
var AOS_STATUS_BAR_HEIGHT = (_a = StatusBar.currentHeight) !== null && _a !== void 0 ? _a : 0;
var isPortrait = isIOS
    ? true
    : Dimensions.get('screen').height >= Dimensions.get('screen').width;
var SCREEN_WIDTH = isIOS
    ? Dimensions.get('window').width
    : isPortrait
        ? Dimensions.get('screen').width
        : Dimensions.get('screen').height;
var SCREEN_HEIGHT = isIOS
    ? Dimensions.get('window').height
    : isPortrait
        ? Dimensions.get('screen').height
        : Dimensions.get('screen').width;
var SCREEN_DIAGONAL = Math.sqrt(Math.pow(SCREEN_HEIGHT, 2) + Math.pow(SCREEN_WIDTH, 2));
var WIDTH_RATE = SCREEN_WIDTH / 375;
var HEIGHT_RATE = isIOS
    ? (SCREEN_HEIGHT - getBottomSpace()) / (812 - getBottomSpace())
    : SCREEN_HEIGHT / 812;
var AOS_BOTTOM_SPACE = 14 * HEIGHT_RATE;
var TAB_BAR_HEIGHT = isIOS
    ? isIphoneX()
        ? 50 * HEIGHT_RATE + getBottomSpace()
        : 64 * HEIGHT_RATE
    : 50 * HEIGHT_RATE + AOS_BOTTOM_SPACE;
var BOTTOM_BUTTON_HEIGHT = isIphoneX()
    ? 60 * WIDTH_RATE + getBottomSpace()
    : 60 * WIDTH_RATE;
var isIOS667 = isIOS && SCREEN_HEIGHT < 668;
var IOS_SCREEN_OPTIMIZATION = isIOS667 ? HEIGHT_RATE : WIDTH_RATE;
var AOS_SCREEN_OPTIMIZATION = Number(HEIGHT_RATE.toFixed(2)) <= 0.98 ? HEIGHT_RATE : WIDTH_RATE;
export default {
    AOS_STATUS_BAR_HEIGHT: AOS_STATUS_BAR_HEIGHT,
    AOS_BOTTOM_SPACE: AOS_BOTTOM_SPACE,
    SCREEN_WIDTH: SCREEN_WIDTH,
    SCREEN_HEIGHT: SCREEN_HEIGHT,
    SCREEN_DIAGONAL: SCREEN_DIAGONAL,
    WIDTH_RATE: WIDTH_RATE,
    HEIGHT_RATE: HEIGHT_RATE,
    TAB_BAR_HEIGHT: TAB_BAR_HEIGHT,
    BOTTOM_BUTTON_HEIGHT: BOTTOM_BUTTON_HEIGHT,
    IOS_SCREEN_OPTIMIZATION: IOS_SCREEN_OPTIMIZATION,
    AOS_SCREEN_OPTIMIZATION: AOS_SCREEN_OPTIMIZATION,
    isIOS667: isIOS667,
};
//# sourceMappingURL=index.js.map