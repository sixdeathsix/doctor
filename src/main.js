import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import { router } from "./router/index";
import { store } from "./store/index";

import '/node_modules/primevue/resources/primevue.min.css';
import '/node_modules/primevue/resources/themes/lara-light-blue/theme.css';
import '/node_modules/primeflex/primeflex.css';
import '/node_modules/primeicons/primeicons.css';

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Row from 'primevue/row';

const app = createApp(App);

app.component("InputText", InputText);
app.component("Button", Button);
app.component("Toast", Toast);
app.component("Calendar", Calendar);
app.component("Dropdown", Dropdown);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("Row", Row);

app.use(router);
app.use(store);
app.use(PrimeVue);
app.use(ToastService);

app.mount('#app');
