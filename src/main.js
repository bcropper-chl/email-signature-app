import { createApp } from 'vue'
import App from './App.vue'
import { createStorage } from './storage/StorageFactory';


const app = createApp(App).mount('#app')

const storage = createStorage('cloud');

app.provide('storage', storage);

app.mount('#app');

