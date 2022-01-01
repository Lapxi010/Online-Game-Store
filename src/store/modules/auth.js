import axios from "axios"
const TOKEN_KEY = 'jwt-item'

export default {
    namespaced: true,
    state(){
        return {
            token: localStorage.getItem(TOKEN_KEY)
        }
    },
    mutations:{
        setToken(state, token){
            state.token = token
            localStorage.setItem(TOKEN_KEY, token)
        }
    },
    actions:{
        async login({commit, dispatch}, payload){
            try {
                const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDQ9nBretMORrhlJzgE9uQdqpX3dRM5kZA`
                const {data} = await axios.post(url, {...payload, returnSecureToken:true})
                commit('setToken', data.idToken)
            }catch (e){
                throw new Error()
            }
        },
        async register({commit, dispatch}, payload){
            try {
                const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDQ9nBretMORrhlJzgE9uQdqpX3dRM5kZA`
                const {data} = await axios.post(url, {...payload, returnSecureToken:true})
                commit('setToken', data.idToken)
            }catch (e){
                throw new Error()
            }
        },
    },
    getters:{
        token(state){
            return state.token
        },
        isAuntificated(state){
            return !!state.token
        }
    }
}
