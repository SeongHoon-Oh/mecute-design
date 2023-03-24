import { throttle, debounce } from 'lodash';

export default {
  getFeaturedPressHandler: (
    handler: () => void,
    type: string,
    duration: number
  ) => {
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
