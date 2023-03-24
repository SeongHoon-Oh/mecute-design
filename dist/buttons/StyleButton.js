import React from 'react';
import { Pressable, StyleSheet, View, } from 'react-native';
import { COLORS, SIZES } from '../common';
import Typography from '../components/Typography';
import { utils } from '../common/utils';
export var STYLE_BUTTON_THEME = {
    GRAY: 'gray',
    PRIMARY: 'primary',
};
export var STYLE_BUTTON_TYPE = {
    ENABLED: 'enabled',
    DISABLED: 'disabled',
    TONAL: 'tonal',
    OUTLINED: 'outlined',
    GHOST: 'ghost',
};
export var STYLE_BUTTON_SIZE = {
    XL: 'xl',
    L: 'l',
    M: 'm',
    S: 's',
    XS: 'xs',
    XSS: 'xss',
};
export var STYLE_BUTTON_SPACE_TYPE = {
    HUG: 'hug',
    FILL: 'fill',
    POPUP_FILL: 'popup-fill',
    HORIZONTAL_STRETCHED: 'horizontal-stretched',
};
var getStyleFromThemeAndType = function (theme, type) {
    switch (type) {
        case STYLE_BUTTON_TYPE.ENABLED:
            return {
                backgroundColor: theme === STYLE_BUTTON_THEME.GRAY ? COLORS.GRAY8 : COLORS.PRIMARY6,
            };
        case STYLE_BUTTON_TYPE.DISABLED:
            return {
                backgroundColor: theme === STYLE_BUTTON_THEME.GRAY ? COLORS.GRAY4 : COLORS.PRIMARY2,
            };
        case STYLE_BUTTON_TYPE.TONAL:
            return {
                backgroundColor: theme === STYLE_BUTTON_THEME.GRAY ? COLORS.GRAY1 : COLORS.PRIMARY0,
            };
        case STYLE_BUTTON_TYPE.OUTLINED:
            return {
                backgroundColor: 'transparent',
                borderWidth: 2 * SIZES.WIDTH_RATE,
                borderColor: theme === STYLE_BUTTON_THEME.GRAY ? COLORS.GRAY2 : COLORS.PRIMARY4,
            };
        case STYLE_BUTTON_TYPE.GHOST:
            return {
                backgroundColor: 'transparent',
            };
    }
};
var getTextVariant = function (size) {
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
var getTextStyle = function (theme, type, size) {
    var textStyle = {};
    switch (type) {
        case STYLE_BUTTON_TYPE.ENABLED:
        case STYLE_BUTTON_TYPE.DISABLED:
            textStyle = {
                color: COLORS.GRAY0,
            };
            break;
        case STYLE_BUTTON_TYPE.TONAL:
            textStyle = {
                color: theme === STYLE_BUTTON_THEME.GRAY ? COLORS.GRAY7 : COLORS.PRIMARY5,
            };
            break;
        case STYLE_BUTTON_TYPE.OUTLINED:
            textStyle = {
                color: theme === STYLE_BUTTON_THEME.GRAY ? COLORS.GRAY7 : COLORS.PRIMARY6,
            };
            break;
        case STYLE_BUTTON_TYPE.GHOST:
            textStyle = {
                color: theme === STYLE_BUTTON_THEME.GRAY ? COLORS.GRAY5 : COLORS.PRIMARY6,
            };
            break;
    }
    return textStyle;
};
var getStyleNameFromSize = function (size) {
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
var getContainerStyleName = function (type) {
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
function StyleButton(_a) {
    var theme = _a.theme, size = _a.size, type = _a.type, spaceType = _a.spaceType, onPress = _a.onPress, pressOption = _a.pressOption, disabled = _a.disabled, children = _a.children, containerStyle = _a.containerStyle, buttonStyle = _a.buttonStyle, textStyle = _a.textStyle, dimmed = _a.dimmed, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon;
    var pressType;
    var duration;
    var pressHandler = onPress || (function () { });
    if (onPress && pressOption) {
        pressType = pressOption[0], duration = pressOption[1];
        pressHandler = utils.getFeaturedPressHandler(onPress, pressType, duration);
    }
    return (<Pressable style={[
            styles[getContainerStyleName(spaceType)],
            dimmed ? { backgroundColor: COLORS.GRAY0 } : {},
            containerStyle || {},
        ]} onPress={pressHandler} disabled={!!disabled}>
      <View style={[
            styles.button,
            getStyleFromThemeAndType(theme, type),
            styles[getStyleNameFromSize(size)],
            buttonStyle || {},
        ]}>
        {leftIcon}
        <Typography variant={getTextVariant(size)} style={[
            getTextStyle(theme, type, size),
            leftIcon ? { marginLeft: 4 } : {},
            rightIcon ? { marginRight: 4 } : {},
            textStyle || {},
        ]}>
          {children}
        </Typography>
        {rightIcon}
      </View>
    </Pressable>);
}
var styles = StyleSheet.create({
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
//# sourceMappingURL=StyleButton.js.map