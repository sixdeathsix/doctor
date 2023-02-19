import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import { router } from "./router/index";
import { store } from "./store/index";
import api from "./services/index";

import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import '/node_modules/primeflex/primeflex.css'

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';

const app = createApp(App);

app.config.globalProperties.$api = api;

app.component("InputText", InputText);
app.component("Button", Button);
app.component("Toast", Toast);

app.use(router);
app.use(store);
app.use(PrimeVue);
app.use(ToastService);

app.mount('#app');
