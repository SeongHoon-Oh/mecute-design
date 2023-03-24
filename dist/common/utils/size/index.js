import { Dimensions, PixelRatio, Platform } from 'react-native';
import { SIZES } from '../..';
var isIOS = Platform.OS === 'ios';
var fitTextsSizeToLine = function (fontSize, maxLength, offset) {
    if (offset !== undefined) {
        return Math.min(normalizeFontSize(fontSize), (SIZES.SCREEN_WIDTH - offset) / maxLength);
    }
    return Math.min(normalizeFontSize(fontSize), SIZES.SCREEN_WIDTH / maxLength);
};
var fontScale = Dimensions.get('window').fontScale;
var isFromTo = function (_a) {
    var from = _a.from, to = _a.to, base = _a.base;
    if (base >= from && base < to) {
        return true;
    }
    else {
        return false;
    }
};
var normalizeFontSize = function (size) {
    if (isIOS) {
        return size * SIZES.WIDTH_RATE;
    }
    else {
        var ratio = PixelRatio.get();
        var resize = size * SIZES.AOS_SCREEN_OPTIMIZATION;
        if (fontScale > 1) {
            var customFontSizeScale = fontScale > 1 ? fontScale - 1 : 0;
            return size * (SIZES.WIDTH_RATE - customFontSizeScale);
        }
        if (isFromTo({ from: 2, to: 3, base: ratio })) {
            return resize;
        }
        else if (isFromTo({ from: 3, to: 3.5, base: ratio })) {
            if (SIZES.SCREEN_WIDTH < 360) {
                return resize * 0.95;
            }
            else if (SIZES.SCREEN_HEIGHT < 667) {
                return resize;
            }
            else if (SIZES.SCREEN_HEIGHT >= 667 && SIZES.SCREEN_HEIGHT < 734) {
                return resize * 1.05;
            }
            else if (SIZES.SCREEN_HEIGHT >= 735 && SIZES.SCREEN_HEIGHT < 800) {
                return resize * 1.09;
            }
            else if (SIZES.SCREEN_HEIGHT >= 800 && SIZES.SCREEN_HEIGHT < 884) {
                return resize * 1.02;
            }
            return resize * 0.95;
        }
        else if (ratio >= 3.5) {
            if (SIZES.SCREEN_WIDTH < 360) {
                return resize * 0.95;
            }
            else if (SIZES.SCREEN_HEIGHT < 667) {
                return resize;
            }
            else if (SIZES.SCREEN_HEIGHT >= 667 && SIZES.SCREEN_HEIGHT <= 735) {
                return resize * 1.05;
            }
            return resize * 0.89;
        }
        return resize;
    }
};
export default {
    fitTextsSizeToLine: fitTextsSizeToLine,
    normalizeFontSize: normalizeFontSize,
};
//# sourceMappingURL=index.js.map