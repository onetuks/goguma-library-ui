// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../components/MainPage.vue';
import BookDetailPage from '../components/BookDetailPage.vue';
import BookReviewPage from '../components/BookReviewPage.vue';
import FeedPage from '../components/FeedPage.vue';
import MyLibraryPage from '../components/MyLibraryPage.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/book/:id', component: BookDetailPage },
  { path: '/write-review', component: BookReviewPage },
  { path: '/feed', component: FeedPage },
  { path: '/my-library', component: MyLibraryPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
