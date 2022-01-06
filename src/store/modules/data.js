import 'firebase/app'
import firebase from "firebase/compat";

export default {
    namespaced: true,
    state(){
        return {
            data:[]
        }
    },
    mutations:{

    },
    actions:{
        async createdb({commit}, payload){
            await firebase.database().ref('games').push(payload)
        },
        async getAll({commit,state},payload){
            const data = await firebase.database().ref('games').get().then(value =>
                state.data = value.val()
            )
        }
    },
    getters:{
        getData(state){

        }
    }
}
