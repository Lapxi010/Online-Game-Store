import axios from "axios"
const current_game = 'current_game'

export default {
    namespaced: true,
    state(){
        return {
           basket:[],
           currentGame2:localStorage.getItem(current_game),
           currentGame: [],
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
                //localStorage.setItem(current_game, JSON.stringify(payload))
        }
    },
    actions:{

    },
    getters:{
        getCurrentGame(state){
            return state.currentGame
        },
        getCurrentGame2(state){
            return state.currentGame2
        },
        getBasket(state){
            return state.basket
        }
    }
}
