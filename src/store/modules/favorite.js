import axios from "axios"

export default {
    namespaced: true,
    state(){
        return {
            favorite:[]
        }
    },
    mutations:{
        addFavorite(state, payload){
            let flag = false

            for(let i of state.favorite){
                if (payload.title === i.title){
                    flag = true
                }
            }

            if (!flag){
                state.favorite.push({...payload})
            }
        }
    },
    actions:{

    },
    getters:{
        getFavorite(state){
            return state.favorite
        }
    }
}
