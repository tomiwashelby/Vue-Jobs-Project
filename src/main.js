import './assets/main.css';
import 'primeicons/primeicons.css';
import router from './router';
import toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import './fireBaseConfig'

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.use(router);
app.use(toast);

app.mount('#app');