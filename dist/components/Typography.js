var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { Text, StyleSheet, View, } from 'react-native';
import { useTranslation } from 'react-i18next';
import { LanguageType } from '../common/types';
import { COLORS, sizeUtils } from '../common';
import WrappedText from './WrappedText';
var variants = StyleSheet.create({
    head1: {
        fontSize: sizeUtils.normalizeFontSize(36),
        fontFamily: 'Pretendard-Bold',
    },
    head2: {
        fontSize: sizeUtils.normalizeFontSize(28),
        fontFamily: 'Pretendard-Bold',
    },
    head3: {
        fontSize: sizeUtils.normalizeFontSize(28),
        fontFamily: 'Pretendard-Regular',
    },
    head4: {
        fontSize: sizeUtils.normalizeFontSize(26),
        fontFamily: 'Pretendard-Regular',
    },
    head5: {
        fontSize: sizeUtils.normalizeFontSize(30),
        fontFamily: 'Pretendard-Bold',
    },
    head6: {
        fontSize: sizeUtils.normalizeFontSize(48),
        fontFamily: 'Pretendard-Bold',
    },
    head7: {
        fontSize: sizeUtils.normalizeFontSize(34),
        fontFamily: 'Pretendard-Regular',
    },
    head8: {
        fontSize: sizeUtils.normalizeFontSize(34),
        fontFamily: 'Pretendard-Bold',
    },
    head9: {
        fontSize: sizeUtils.normalizeFontSize(26),
        fontFamily: 'Pretendard-Bold',
    },
    subhead1: {
        fontSize: sizeUtils.normalizeFontSize(24),
        fontFamily: 'Pretendard-Bold',
    },
    subhead2: {
        fontSize: sizeUtils.normalizeFontSize(23),
        fontFamily: 'Pretendard-Bold',
    },
    subhead3: {
        fontSize: sizeUtils.normalizeFontSize(22),
        fontFamily: 'Pretendard-Bold',
    },
    subhead4: {
        fontSize: sizeUtils.normalizeFontSize(20),
        fontFamily: 'Pretendard-Bold',
    },
    subhead5: {
        fontSize: sizeUtils.normalizeFontSize(18),
        fontFamily: 'Pretendard-SemiBold',
    },
    subhead6: {
        fontSize: sizeUtils.normalizeFontSize(17),
        fontFamily: 'Pretendard-SemiBold',
    },
    subhead7: {
        fontSize: sizeUtils.normalizeFontSize(22),
        fontFamily: 'Pretendard-Regular',
    },
    subhead8: {
        fontSize: sizeUtils.normalizeFontSize(18),
        fontFamily: 'Pretendard-Regular',
    },
    subhead9: {
        fontSize: sizeUtils.normalizeFontSize(17),
        fontFamily: 'Pretendard-Regular',
    },
    body1: {
        fontSize: sizeUtils.normalizeFontSize(13),
        fontFamily: 'Pretendard-Bold',
    },
    body2: {
        fontSize: sizeUtils.normalizeFontSize(13),
        fontFamily: 'Pretendard-Regular',
    },
    body3: {
        fontSize: sizeUtils.normalizeFontSize(16),
        fontFamily: 'Pretendard-SemiBold',
    },
    body4: {
        fontSize: sizeUtils.normalizeFontSize(14),
        fontFamily: 'Pretendard-SemiBold',
    },
    body5: {
        fontSize: sizeUtils.normalizeFontSize(16),
        fontFamily: 'Pretendard-Regular',
    },
    body6: {
        fontSize: sizeUtils.normalizeFontSize(14),
        fontFamily: 'Pretendard-Regular',
    },
    body7: {
        fontSize: sizeUtils.normalizeFontSize(12),
        fontFamily: 'Pretendard-Regular',
    },
    body8: {
        fontSize: sizeUtils.normalizeFontSize(12),
        fontFamily: 'Pretendard-Bold',
    },
    body9: {
        fontSize: sizeUtils.normalizeFontSize(15),
        fontFamily: 'Pretendard-Regular',
    },
    body10: {
        fontSize: sizeUtils.normalizeFontSize(15),
        fontFamily: 'Pretendard-Bold',
    },
    caption1: {
        fontSize: sizeUtils.normalizeFontSize(11),
        fontFamily: 'Pretendard-Regular',
    },
});
var colors = StyleSheet.create({
    gray0: {
        color: COLORS.GRAY0,
    },
    gray3: {
        color: COLORS.GRAY3,
    },
    gray4: {
        color: COLORS.GRAY4,
    },
    gray5: {
        color: COLORS.GRAY5,
    },
    gray6: {
        color: COLORS.GRAY6,
    },
    gray7: {
        color: COLORS.GRAY7,
    },
    gray8: {
        color: COLORS.GRAY8,
    },
    gray10: {
        color: COLORS.GRAY10,
    },
    signal10: {
        color: COLORS.SIGNAL10,
    },
    primary5: {
        color: COLORS.PRIMARY5,
    },
    primary6: {
        color: COLORS.PRIMARY6,
    },
    primary7: {
        color: COLORS.PRIMARY7,
    },
    tertiary4: {
        color: COLORS.TERTIARY4,
    },
    error: {
        color: COLORS.ERROR,
    },
    signal1: {
        color: COLORS.SIGNAL1,
    },
});
var fontStyles = StyleSheet.create({
    normal: {
        fontStyle: 'normal',
    },
    italic: {
        fontStyle: 'italic',
    },
});
var textAligns = StyleSheet.create({
    left: {
        textAlign: 'left',
    },
    center: {
        textAlign: 'center',
    },
    right: {
        textAlign: 'right',
    },
});
export default function Typography(props) {
    var _a, _b, _c, _d;
    var i18n = useTranslation().i18n;
    var propsStyle = props.style;
    if (Array.isArray(props.style)) {
        propsStyle = props.style.reduce(function (acc, cur) { return (__assign(__assign({}, acc), cur)); });
    }
    var textStyle = __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (props.variant && variants[props.variant])), (props.color ? colors[props.color] : { color: COLORS.GRAY8 })), (props.fontStyle
        ? fontStyles[props.fontStyle]
        : { fontStyle: 'normal' })), (props.textAlign ? textAligns[props.textAlign] : { textAlign: 'left' })), propsStyle), (props.pleaseFixMe && { color: 'red' })), (props.maxWidth && { width: props.maxWidth }));
    return (<>
      {props.wrapped && i18n.language === LanguageType.KO ? (<View style={[styles.textContainer, props.wrappedStyle]}>
          <WrappedText textStyle={textStyle}>{props.children}</WrappedText>
        </View>) : (<Text onTextLayout={props.onTextLayout} textBreakStrategy={'simple'} style={textStyle} adjustsFontSizeToFit={(_a = props.adjustsFontSizeToFit) !== null && _a !== void 0 ? _a : false} minimumFontScale={(_b = props.minimumFontScale) !== null && _b !== void 0 ? _b : 0.5} ellipsizeMode={((_c = props.ellipsizeMode) !== null && _c !== void 0 ? _c : props.maxWidth) ? 'tail' : undefined} numberOfLines={((_d = props.numberOfLines) !== null && _d !== void 0 ? _d : props.maxWidth) ? 1 : undefined}>
          {props.children}
        </Text>)}
    </>);
}
var styles = StyleSheet.create({
    textContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
});
Typography.defaultProps = {
    wrapped: false,
    wrappedStyle: {},
};
//# sourceMappingURL=Typography.js.map