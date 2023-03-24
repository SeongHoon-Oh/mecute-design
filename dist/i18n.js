import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
var resources = {
    en: {
        translation: {
            'Welcome to React': 'Welcome to React and react-i18next',
        },
    },
    kr: {
        translation: {
            'Welcome to React': '웰컴 투 React et react-i18next',
        },
    },
};
i18n
    .use(initReactI18next)
    .init({
    resources: resources,
    lng: 'kr',
    interpolation: {
        escapeValue: false,
    },
});
export default i18n;
//# sourceMappingURL=i18n.js.map