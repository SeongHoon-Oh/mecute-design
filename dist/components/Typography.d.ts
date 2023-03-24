import { ReactNode } from 'react';
import { TextStyle, NativeSyntheticEvent, TextLayoutEventData, ViewStyle } from 'react-native';
interface TypographyProps {
    variant?: 'head1' | 'head2' | 'head3' | 'head4' | 'head5' | 'head6' | 'head7' | 'head8' | 'head9' | 'subhead1' | 'subhead2' | 'subhead3' | 'subhead4' | 'subhead5' | 'subhead6' | 'subhead7' | 'subhead8' | 'subhead9' | 'body1' | 'body2' | 'body3' | 'body4' | 'body5' | 'body6' | 'body7' | 'body8' | 'body9' | 'body10' | 'caption1';
    color?: 'gray0' | 'gray3' | 'gray4' | 'gray5' | 'gray6' | 'gray7' | 'gray8' | 'gray10' | 'primary6' | 'primary7' | 'signal10' | 'tertiary4' | 'error';
    fontStyle?: 'normal' | 'italic';
    textAlign?: 'left' | 'center' | 'right';
    children?: ReactNode;
    style?: TextStyle | TextStyle[];
    wrapped?: boolean;
    wrappedStyle?: ViewStyle;
    numberOfLines?: number;
    ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip' | undefined;
    maxWidth?: number;
    adjustsFontSizeToFit?: boolean;
    minimumFontScale?: number;
    pleaseFixMe?: boolean;
    onTextLayout?: ((event: NativeSyntheticEvent<TextLayoutEventData>) => void) | undefined;
}
declare function Typography(props: TypographyProps): JSX.Element;
declare namespace Typography {
    var defaultProps: Partial<TypographyProps>;
}
export default Typography;
//# sourceMappingURL=Typography.d.ts.map