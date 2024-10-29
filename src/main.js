import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from '../../sso_frontend_vuetify/src/store';
import GlobalLib from '../../sso_frontend_vuetify/src/global/global-lib-plugin';

createApp(App)
  .use(router)
  .use(store)
  .use(GlobalLib, {
    store: store,
    router: router
  })
  .mount('#app');
