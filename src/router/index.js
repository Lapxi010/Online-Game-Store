import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Basket from "../views/Basket";
import Catalog from "../views/Catalog";
import News from "../views/News";
import Favorite from "../views/Favorite";
import Game from "../views/Game";
import Admin from "../views/Admin";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/articles',
    name: 'Articles',
    component: News
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: Favorite
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
