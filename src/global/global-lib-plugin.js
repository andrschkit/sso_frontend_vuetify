import ComponentsLib from '/src/global/components/components-lib-plugin';
import MixinsLib from '@/global/mixins/mixins-lib-plugin';
import PluginsLib from '@/global/plugins/plugins-lib-plugin';

export default {
    install(Vue, opts) {
        Vue.use(ComponentsLib, opts);
        Vue.use(MixinsLib, opts);
        Vue.use(PluginsLib, opts);
    }
}
