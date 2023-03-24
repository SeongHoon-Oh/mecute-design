import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
export declare const STYLE_BUTTON_THEME: {
    readonly GRAY: "gray";
    readonly PRIMARY: "primary";
};
export declare const STYLE_BUTTON_TYPE: {
    readonly ENABLED: "enabled";
    readonly DISABLED: "disabled";
    readonly TONAL: "tonal";
    readonly OUTLINED: "outlined";
    readonly GHOST: "ghost";
};
export declare const STYLE_BUTTON_SIZE: {
    readonly XL: "xl";
    readonly L: "l";
    readonly M: "m";
    readonly S: "s";
    readonly XS: "xs";
    readonly XSS: "xss";
};
export declare const STYLE_BUTTON_SPACE_TYPE: {
    readonly HUG: "hug";
    readonly FILL: "fill";
    readonly POPUP_FILL: "popup-fill";
    readonly HORIZONTAL_STRETCHED: "horizontal-stretched";
};
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
declare function StyleButton({ theme, size, type, spaceType, onPress, pressOption, disabled, children, containerStyle, buttonStyle, textStyle, dimmed, leftIcon, rightIcon, }: StyleButtonProps): JSX.Element;
declare namespace StyleButton {
    var defaultProps: {
        theme: string;
        spaceType: string;
    };
}
export default StyleButton;
//# sourceMappingURL=StyleButton.d.ts.map