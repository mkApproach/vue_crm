import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css';

//import App from './components/MyAppComponent.vue'

require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('role-component', require('./components/RoleComponent.vue').default);
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('app-component', require('./components/AppComponent.vue').default);
Vue.component('myapp-component', require('./components/MyAppComponent.vue').default);

Vue.use(VueRouter);
Vue.use(Vuetify);

const router = new VueRouter({
     routes: [
        {
            path: '/task',
            name: 'task',
            component: () => import('./components/task/Task.vue'),
        },
        {
            path: '/mytask',
            name: 'mytask',
            component: () => import('./components/mytask/Task.vue'),
        },
        {
            path: '/search',
            name: 'mysearch',
            component: () => import('./components/mysearch/Search.vue'),
        },
        {
            path: '/mysearch',
            name: 'search',
            component: () => import('./components/search/Search.vue'),
        },
        {
            path: '/user',
            name: 'user',
            component: () => import('./components/user/User.vue'),
        },
        {
            path: '/myuser',
            name: 'myuser',
            component: () => import('./components/myuser/User.vue'),
        },
     ]
});


const app = new Vue({
    el: '#app',
    router,
    vuetify: new Vuetify(), // ページャー
//    components: { App }, // ルートコンポーネントの使用を宣言する
//    template: '<App />' 
});
