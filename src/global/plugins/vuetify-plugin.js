// Styles
import 'vuetify/_styles.scss'

import {createVuetify} from 'vuetify'
import {aliases, md} from 'vuetify/lib/iconsets/md';
import {aliases as aliasesMdi, mdi} from 'vuetify/lib/iconsets/mdi';
import {en, ru} from 'vuetify/locale'

export default {
    install(Vue, opts) {
        Vue.use(createVuetify({
            locale: {
                locale: 'ru',
                fallback: 'en',
                messages: {ru, en},
            },
            icons: {
                defaultSet: 'md',
                aliases,
                aliasesMdi,
                sets: {
                    md,
                    mdi
                }
            },
        }));
    }
}