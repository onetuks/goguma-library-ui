// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../components/MainPage.vue';
import FeedPage from '../components/FeedPage.vue';
import SearchPage from '../components/SearchPage.vue';
import BookDetailPage from '../components/BookDetailPage.vue'; // 새로운 BookDetailPage 컴포넌트를 가져옵니다.

const routes = [
  {
    path: '/main',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/feed',
    name: 'FeedPage',
    component: FeedPage
  },
  {
    path: '/search',
    name: 'SearchPage',
    component: SearchPage
  },
  {
    path: '/book/:id',
    name: 'BookDetailPage',
    component: BookDetailPage
  },
  {
    path: '/',
    redirect: '/main'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
