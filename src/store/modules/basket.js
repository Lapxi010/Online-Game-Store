import axios from "axios"

export default {
    namespaced: true,
    state(){
        return {
           basket:[],
           currentGame: {}
        }
    },
    mutations:{
        addGood(state, payload){
            state.basket.push({...payload})
        },
        removeGood(state, payload){
            state.basket.splice(payload, 1)
        },
        changeCurrentGame(state,payload){
            state.currentGame = payload
        }
    },
    actions:{

    },
    getters:{
        getCurrentGame(state){
            return state.currentGame
        },
        getBasket(state){
            return state.basket
        }
    }
}
