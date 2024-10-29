import {createRouter, createWebHistory} from 'vue-router';
import SignView from '../../../sso_frontend_vuetify/src/views/sing-view/sing-view.vue';
import LoginForm from '../../../sso_frontend_vuetify/src/views/sing-view/login/login.vue';

const routes = [
  {
    path: '/',
    component: SignView,
    children: [
      {
        path: 'login',
        name: 'login',
        component: LoginForm,
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
