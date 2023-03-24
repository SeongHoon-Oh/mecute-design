import { Dimensions, PixelRatio, Platform } from 'react-native';
import { SIZES } from '../..';

const isIOS = Platform.OS === 'ios';

/** 한 줄에 내용을 모두 보여주기 위한 함수 */
const fitTextsSizeToLine = (
  fontSize: number,
  maxLength: number,
  offset?: number
): number => {
  if (offset !== undefined) {
    return Math.min(
      normalizeFontSize(fontSize),
      (SIZES.SCREEN_WIDTH - offset) / maxLength
    );
  }
  return Math.min(normalizeFontSize(fontSize), SIZES.SCREEN_WIDTH / maxLength);
};

const { fontScale } = Dimensions.get('window');

/** 반응형 폰트 크기
 * AOS는 화면 비율 너비, 높이 기준을 더 세분화해서 추가적으로 비율 조절 함
 */
const isFromTo = ({
  from,
  to,
  base,
}: {
  from: number;
  to: number;
  base: number;
}) => {
  if (base >= from && base < to) {
    return true;
  } else {
    return false;
  }
};

const normalizeFontSize = (size: number): number => {
  if (isIOS) {
    return size * SIZES.WIDTH_RATE;
  } else {
    const ratio = PixelRatio.get();
    const resize = size * SIZES.AOS_SCREEN_OPTIMIZATION;

    /** 폰트 스케일이 평균적인 기본 값보다 큰 경우에 대해 Normalize 작업 ealry return 임시 대응. 추후 정확한 비율 연산적용 이루어지고 있는지 확인과 리팩토링 필요 22.09.30 */
    if (fontScale > 1) {
      const customFontSizeScale = fontScale > 1 ? fontScale - 1 : 0;
      return size * (SIZES.WIDTH_RATE - customFontSizeScale);
    }

    if (isFromTo({ from: 2, to: 3, base: ratio })) {
      return resize;
    } else if (isFromTo({ from: 3, to: 3.5, base: ratio })) {
      if (SIZES.SCREEN_WIDTH < 360) {
        return resize * 0.95;
      } else if (SIZES.SCREEN_HEIGHT < 667) {
        return resize;
      } else if (SIZES.SCREEN_HEIGHT >= 667 && SIZES.SCREEN_HEIGHT < 734) {
        return resize * 1.05;
      } else if (SIZES.SCREEN_HEIGHT >= 735 && SIZES.SCREEN_HEIGHT < 800) {
        return resize * 1.09; // A8(3, 360_740)-OK
      } else if (SIZES.SCREEN_HEIGHT >= 800 && SIZES.SCREEN_HEIGHT < 884) {
        return resize * 1.02; // ZFlip, S20(3, 800)-OK
      }
      return resize * 0.95;
    } else if (ratio >= 3.5) {
      if (SIZES.SCREEN_WIDTH < 360) {
        return resize * 0.95;
      } else if (SIZES.SCREEN_HEIGHT < 667) {
        return resize;
      } else if (SIZES.SCREEN_HEIGHT >= 667 && SIZES.SCREEN_HEIGHT <= 735) {
        return resize * 1.05; // G6(4, 360_720)-OK
      }
      return resize * 0.89; // G8
    }
    return resize;
  }
};

export default {
  fitTextsSizeToLine,
  normalizeFontSize,
};
