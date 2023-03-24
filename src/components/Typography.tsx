import React, { ReactNode } from 'react';
import {
  Text,
  StyleSheet,
  TextStyle,
  View,
  NativeSyntheticEvent,
  TextLayoutEventData,
  ViewStyle,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import { LanguageType } from '../common/types';
import { COLORS, sizeUtils } from '../common';
import WrappedText from './WrappedText';

interface TypographyProps {
  variant?:
    | 'head1'
    | 'head2'
    | 'head3'
    | 'head4'
    | 'head5'
    | 'head6'
    | 'head7'
    | 'head8'
    | 'head9'
    | 'subhead1'
    | 'subhead2'
    | 'subhead3'
    | 'subhead4'
    | 'subhead5'
    | 'subhead6'
    | 'subhead7'
    | 'subhead8'
    | 'subhead9'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'body4'
    | 'body5'
    | 'body6'
    | 'body7'
    | 'body8'
    | 'body9'
    | 'body10'
    | 'caption1';
  color?:
    | 'gray0'
    | 'gray3'
    | 'gray4'
    | 'gray5'
    | 'gray6'
    | 'gray7'
    | 'gray8'
    | 'gray10'
    | 'primary6'
    | 'primary7'
    | 'signal10'
    | 'tertiary4'
    | 'error';
  fontStyle?: 'normal' | 'italic';
  textAlign?: 'left' | 'center' | 'right';
  children?: ReactNode;
  style?: TextStyle | TextStyle[];
  wrapped?: boolean;
  wrappedStyle?: ViewStyle;
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip' | undefined;
  maxWidth?: number;
  /** 글자 크기가 width에 맞춰 조절되도록 함 */
  adjustsFontSizeToFit?: boolean;
  minimumFontScale?: number;
  /** 누르면 터지는 것들에 이 props 주면 글자색이 빨간색 됨. 검색 잘 되라고 이름 이상하게 함 */
  pleaseFixMe?: boolean;
  onTextLayout?:
    | ((event: NativeSyntheticEvent<TextLayoutEventData>) => void)
    | undefined;
}

const variants = StyleSheet.create({
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

/** 디자인 시스템과 동일한 변수명 사용 */
const colors = StyleSheet.create({
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

const fontStyles = StyleSheet.create({
  normal: {
    fontStyle: 'normal',
  },
  italic: {
    fontStyle: 'italic',
  },
});

const textAligns = StyleSheet.create({
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

export default function Typography(props: TypographyProps) {
  const { i18n } = useTranslation();

  let propsStyle = props.style;
  if (Array.isArray(props.style)) {
    propsStyle = props.style.reduce((acc, cur) => ({ ...acc, ...cur }));
  }

  const textStyle: TextStyle = {
    ...(props.variant && variants[props.variant]),
    ...(props.color ? colors[props.color] : { color: COLORS.GRAY8 }),
    ...(props.fontStyle
      ? fontStyles[props.fontStyle]
      : { fontStyle: 'normal' }),
    ...(props.textAlign ? textAligns[props.textAlign] : { textAlign: 'left' }),
    ...propsStyle,
    ...(props.pleaseFixMe && { color: 'red' }),
    ...(props.maxWidth && { width: props.maxWidth }),
  };
  return (
    <>
      {props.wrapped && i18n.language === LanguageType.KO ? (
        <View style={[styles.textContainer, props.wrappedStyle]}>
          <WrappedText textStyle={textStyle}>{props.children}</WrappedText>
        </View>
      ) : (
        <Text
          onTextLayout={props.onTextLayout}
          textBreakStrategy={'simple'}
          style={textStyle}
          adjustsFontSizeToFit={props.adjustsFontSizeToFit ?? false}
          minimumFontScale={props.minimumFontScale ?? 0.5}
          ellipsizeMode={
            props.ellipsizeMode ?? props.maxWidth ? 'tail' : undefined
          }
          numberOfLines={props.numberOfLines ?? props.maxWidth ? 1 : undefined}
        >
          {props.children}
        </Text>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
});
Typography.defaultProps = {
  wrapped: false,
  wrappedStyle: {},
} as Partial<TypographyProps>;
