import { Dimensions, StatusBar, Platform } from 'react-native';
import { isIphoneX, getBottomSpace } from 'react-native-iphone-x-helper';

const isIOS = Platform.OS === 'ios';

/** AOS StatusBar 높이 가져오기 */
const AOS_STATUS_BAR_HEIGHT = StatusBar.currentHeight ?? 0;
/** 화면 세로 여부 */
const isPortrait = isIOS
  ? true
  : Dimensions.get('screen').height >= Dimensions.get('screen').width;
/** 화면 가로 길이 */
const SCREEN_WIDTH = isIOS
  ? Dimensions.get('window').width
  : isPortrait
  ? Dimensions.get('screen').width
  : Dimensions.get('screen').height;
/** 화면 세로 길이 */
const SCREEN_HEIGHT = isIOS
  ? Dimensions.get('window').height
  : isPortrait
  ? Dimensions.get('screen').height
  : Dimensions.get('screen').width;
/** 화면 대각선 길이 */
const SCREEN_DIAGONAL = Math.sqrt(
  Math.pow(SCREEN_HEIGHT, 2) + Math.pow(SCREEN_WIDTH, 2)
);
/** Zeplin 기준 가로 화면 배율 */
const WIDTH_RATE = SCREEN_WIDTH / 375;
/** Zeplin 기준 세로 화면 배율 */
const HEIGHT_RATE = isIOS
  ? (SCREEN_HEIGHT - getBottomSpace()) / (812 - getBottomSpace())
  : SCREEN_HEIGHT / 812;
/** AOS getBottomSpace(ios getBottomSpace 대신 aos는 full screen 사용하면서 임의로 값 세팅 */
const AOS_BOTTOM_SPACE = 14 * HEIGHT_RATE;
const TAB_BAR_HEIGHT = isIOS
  ? isIphoneX()
    ? 50 * HEIGHT_RATE + getBottomSpace()
    : 64 * HEIGHT_RATE
  : 50 * HEIGHT_RATE + AOS_BOTTOM_SPACE;
/** 하단 다음 버튼 높이 */
const BOTTOM_BUTTON_HEIGHT = isIphoneX()
  ? 60 * WIDTH_RATE + getBottomSpace()
  : 60 * WIDTH_RATE;

/** IOS height 667이하 기기 화면 배율*/
const isIOS667 = isIOS && SCREEN_HEIGHT < 668;
const IOS_SCREEN_OPTIMIZATION = isIOS667 ? HEIGHT_RATE : WIDTH_RATE;
const AOS_SCREEN_OPTIMIZATION =
  Number(HEIGHT_RATE.toFixed(2)) <= 0.98 ? HEIGHT_RATE : WIDTH_RATE; // s20 기준 1차 분기

export default {
  AOS_STATUS_BAR_HEIGHT,
  AOS_BOTTOM_SPACE,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  SCREEN_DIAGONAL,
  WIDTH_RATE,
  HEIGHT_RATE,
  TAB_BAR_HEIGHT,
  BOTTOM_BUTTON_HEIGHT,
  IOS_SCREEN_OPTIMIZATION,
  AOS_SCREEN_OPTIMIZATION,
  isIOS667,
};
