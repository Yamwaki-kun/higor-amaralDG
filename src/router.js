import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import ProjectDetailView  from './views/ProjectDetailView.vue';

const routes = [
    { path: '/', component: Home },
     {
    path: '/project/:id',
    name: 'ProjectDetail',
    component: ProjectDetailView
  }
];

const router = createRouter({
  history: createWebHistory('/'), // Define o base path para corresponder ao publicPath do Vite
  routes
});

export default router;