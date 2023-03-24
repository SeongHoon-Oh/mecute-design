import { throttle, debounce } from 'lodash';
export default {
    getFeaturedPressHandler: function (handler, type, duration) {
        switch (type) {
            case 'debounce':
                return debounce(handler, duration);
            case 'throttle':
                return throttle(handler, duration);
            default:
                return handler;
        }
    },
};
//# sourceMappingURL=index.js.map