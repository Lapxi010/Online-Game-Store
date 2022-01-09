import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/style/index.sass'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/messaging'
import 'firebase/storage'
import firebase from 'firebase/compat/app'

let config = {
    apiKey: "AIzaSyDQ9nBretMORrhlJzgE9uQdqpX3dRM5kZA",
    authDomain: "game-shop-77254.firebaseapp.com",
    databaseURL: "https://game-shop-77254-default-rtdb.firebaseio.com",
    projectId: "game-shop-77254",
    storageBucket: "game-shop-77254.appspot.com",
    messagingSenderId: "1037171651808",
    appId: "1:1037171651808:web:ee2a48f75430d17d12cc85"
}
// создание подклбчения к firebase
firebase.initializeApp(config)


createApp(App).use(store).use(router).mount('#app')
