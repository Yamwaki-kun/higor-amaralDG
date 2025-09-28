import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';

const routes = [
    { path: '/', component: Home },
];

const router = createRouter({
  history: createWebHistory('/'), // Define o base path para corresponder ao publicPath do Vite
  routes
});

export default router;