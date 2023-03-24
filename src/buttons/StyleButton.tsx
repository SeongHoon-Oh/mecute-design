import React from 'react';
import {
  ViewStyle,
  Pressable,
  StyleSheet,
  View,
  TextStyle,
} from 'react-native';
import { COLORS, SIZES } from '../common';
import Typography from '../components/Typography';
import { utils } from '../common/utils';

export const STYLE_BUTTON_THEME = {
  GRAY: 'gray',
  PRIMARY: 'primary',
} as const;
export const STYLE_BUTTON_TYPE = {
  ENABLED: 'enabled',
  DISABLED: 'disabled',
  TONAL: 'tonal',
  OUTLINED: 'outlined',
  GHOST: 'ghost',
} as const;
export const STYLE_BUTTON_SIZE = {
  XL: 'xl',
  L: 'l',
  M: 'm',
  S: 's',
  XS: 'xs',
  XSS: 'xss',
} as const;
export const STYLE_BUTTON_SPACE_TYPE = {
  HUG: 'hug',
  FILL: 'fill',
  POPUP_FILL: 'popup-fill',
  HORIZONTAL_STRETCHED: 'horizontal-stretched',
} as const;

export type StyleButtonThemeType = typeof STYLE_BUTTON_THEME[keyof typeof STYLE_BUTTON_THEME];
export type StyleButtonTypeType = typeof STYLE_BUTTON_TYPE[keyof typeof STYLE_BUTTON_TYPE];
export type StyleButtonSizeType = typeof STYLE_BUTTON_SIZE[keyof typeof STYLE_BUTTON_SIZE];
export type StyleButtonSpaceTypeType = typeof STYLE_BUTTON_SPACE_TYPE[keyof typeof STYLE_BUTTON_SPACE_TYPE];

interface StyleButtonProps {
  children?: React.ReactNode;
  theme: StyleButtonThemeType;
  size: StyleButtonSizeType;
  type: StyleButtonTypeType;
  spaceType: StyleButtonSpaceTypeType;
  onPress?: () => void;
  pressOption?: any;
  disabled?: boolean;
  containerStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  dimmed?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

/** getThemeColor */
const getStyleFromThemeAndType = (
  theme: StyleButtonThemeType,
  type: StyleButtonTypeType
) => {
  switch (type) {
    case STYLE_BUTTON_TYPE.ENABLED:
      return {
        backgroundColor:
          theme === STYLE_BUTTON_THEME.GRAY ? COLORS.GRAY8 : COLORS.PRIMARY6,
      };
    case STYLE_BUTTON_TYPE.DISABLED:
      return {
        backgroundColor:
          theme === STYLE_BUTTON_THEME.GRAY ? COLORS.GRAY4 : COLORS.PRIMARY2,
      };
    case STYLE_BUTTON_TYPE.TONAL:
      return {
        backgroundColor:
          theme === STYLE_BUTTON_THEME.GRAY ? COLORS.GRAY1 : COLORS.PRIMARY0,
      };
    case STYLE_BUTTON_TYPE.OUTLINED:
      return {
        backgroundColor: 'transparent',
        borderWidth: 2 * SIZES.WIDTH_RATE,
        borderColor:
          theme === STYLE_BUTTON_THEME.GRAY ? COLORS.GRAY2 : COLORS.PRIMARY4,
      };
    case STYLE_BUTTON_TYPE.GHOST:
      return {
        backgroundColor: 'transparent',
      };
  }
};

/** get Typography gradient */
const getTextVariant = (size: StyleButtonSizeType) => {
  switch (size) {
    case STYLE_BUTTON_SIZE.XL:
    case STYLE_BUTTON_SIZE.L:
      return 'subhead5';
    case STYLE_BUTTON_SIZE.M:
    case STYLE_BUTTON_SIZE.S:
      return 'body3';
    case STYLE_BUTTON_SIZE.XS:
    case STYLE_BUTTON_SIZE.XSS:
      return 'body4';
    default:
      return 'subhead5';
  }
};

/** get Typography's color, lineHeight */
const getTextStyle = (
  theme: StyleButtonThemeType,
  type: StyleButtonTypeType,
  size: StyleButtonSizeType
) => {
  let textStyle = {};

  switch (type) {
    case STYLE_BUTTON_TYPE.ENABLED:
    case STYLE_BUTTON_TYPE.DISABLED:
      textStyle = {
        color: COLORS.GRAY0,
      };
      break;
    case STYLE_BUTTON_TYPE.TONAL:
      textStyle = {
        color:
          theme === STYLE_BUTTON_THEME.GRAY ? COLORS.GRAY7 : COLORS.PRIMARY5,
      };
      break;
    case STYLE_BUTTON_TYPE.OUTLINED:
      textStyle = {
        color:
          theme === STYLE_BUTTON_THEME.GRAY ? COLORS.GRAY7 : COLORS.PRIMARY6,
      };
      break;
    case STYLE_BUTTON_TYPE.GHOST:
      textStyle = {
        color:
          theme === STYLE_BUTTON_THEME.GRAY ? COLORS.GRAY5 : COLORS.PRIMARY6,
      };
      break;
  }

  // lineHeight 값 입력 시, Vertical 가운데 정렬 안맞으므로 주석처리
  // switch (size) {
  //   case STYLE_BUTTON_SIZE.XL:
  //   case STYLE_BUTTON_SIZE.L:
  //     textStyle = { ...textStyle, lineHeight: 18 };
  //     break;
  //   case STYLE_BUTTON_SIZE.M:
  //   case STYLE_BUTTON_SIZE.S:
  //     textStyle = { ...textStyle, lineHeight: 16 };
  //     break;
  //   case STYLE_BUTTON_SIZE.XS:
  //   case STYLE_BUTTON_SIZE.XSS:
  //     textStyle = { ...textStyle, lineHeight: 14 };
  //     break;
  // }

  return textStyle;
};

/** get Button style(height, paddingHorizontal, borderRadius) */
const getStyleNameFromSize = (size: StyleButtonSizeType) => {
  switch (size) {
    case STYLE_BUTTON_SIZE.XL:
      return 'sizeXl';
    case STYLE_BUTTON_SIZE.L:
      return 'sizeL';
    case STYLE_BUTTON_SIZE.M:
      return 'sizeM';
    case STYLE_BUTTON_SIZE.S:
      return 'sizeS';
    case STYLE_BUTTON_SIZE.XS:
      return 'sizeXs';
    case STYLE_BUTTON_SIZE.XSS:
      return 'sizeXss';
    default:
      return 'sizeXl';
  }
};

const getContainerStyleName = (type: StyleButtonSpaceTypeType) => {
  switch (type) {
    case STYLE_BUTTON_SPACE_TYPE.HUG:
      return 'container';
    case STYLE_BUTTON_SPACE_TYPE.FILL:
      return 'fillContainer';
    case STYLE_BUTTON_SPACE_TYPE.POPUP_FILL:
      return 'popupFillContainer';
    case STYLE_BUTTON_SPACE_TYPE.HORIZONTAL_STRETCHED:
      return 'horizontalStretchedContainer';
    default:
      return 'container';
  }
};

function StyleButton({
  theme,
  size,
  type,
  spaceType,
  onPress,
  pressOption,
  disabled,
  children,
  containerStyle,
  buttonStyle,
  textStyle,
  dimmed,
  leftIcon,
  rightIcon,
}: StyleButtonProps): JSX.Element {
  let pressType: string;
  let duration: number;
  let pressHandler = onPress || (() => {});

  /** debounce 혹은 lodash 기능 필요 유무를 pressOption props로 받는 경우 해당 기능 적용 */
  if (onPress && pressOption) {
    [pressType, duration] = pressOption;
    pressHandler = utils.getFeaturedPressHandler(onPress, pressType, duration);
  }

  return (
    <Pressable
      style={[
        styles[getContainerStyleName(spaceType)],
        dimmed ? { backgroundColor: COLORS.GRAY0 } : {},
        containerStyle || {},
      ]}
      onPress={pressHandler}
      disabled={!!disabled}
    >
      <View
        style={[
          styles.button,
          getStyleFromThemeAndType(theme, type),
          styles[getStyleNameFromSize(size)],
          buttonStyle || {},
        ]}
      >
        {leftIcon}
        <Typography
          variant={getTextVariant(size)}
          style={[
            getTextStyle(theme, type, size),
            leftIcon ? { marginLeft: 4 } : {},
            rightIcon ? { marginRight: 4 } : {},
            textStyle || {},
          ]}
        >
          {children}
        </Typography>
        {rightIcon}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
  fillContainer: {
    paddingHorizontal: 20,
    alignItems: 'stretch',
    backgroundColor: 'transparent',
  },
  popupFillContainer: {
    paddingHorizontal: 24,
    alignItems: 'stretch',
    backgroundColor: 'transparent',
  },
  horizontalStretchedContainer: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: 'transparent',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizeXl: {
    height: 56 * SIZES.WIDTH_RATE,
    paddingHorizontal: 30 * SIZES.WIDTH_RATE,
    borderRadius: 14 * SIZES.WIDTH_RATE,
  },
  sizeL: {
    height: 50 * SIZES.WIDTH_RATE,
    paddingHorizontal: 26 * SIZES.WIDTH_RATE,
    borderRadius: 12 * SIZES.WIDTH_RATE,
  },
  sizeM: {
    height: 46 * SIZES.WIDTH_RATE,
    paddingHorizontal: 22 * SIZES.WIDTH_RATE,
    borderRadius: 10 * SIZES.WIDTH_RATE,
  },
  sizeS: {
    height: 40 * SIZES.WIDTH_RATE,
    paddingHorizontal: 16 * SIZES.WIDTH_RATE,
    borderRadius: 10 * SIZES.WIDTH_RATE,
  },
  sizeXs: {
    height: 36 * SIZES.WIDTH_RATE,
    paddingHorizontal: 14 * SIZES.WIDTH_RATE,
    borderRadius: 10 * SIZES.WIDTH_RATE,
  },
  sizeXss: {
    height: 32 * SIZES.WIDTH_RATE,
    paddingHorizontal: 12 * SIZES.WIDTH_RATE,
    borderRadius: 8 * SIZES.WIDTH_RATE,
  },
});

StyleButton.defaultProps = {
  theme: 'gray',
  spaceType: 'hug',
};

export default StyleButton;
