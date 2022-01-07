import { createStore } from 'vuex'
import auth from "./modules/auth"
import basket from "./modules/basket"
import favorite from "./modules/favorite"
import data from "./modules/data"
import admin from './modules/admin'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    basket,
    favorite,
    data,
    admin
  }
})
