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
        async getAll({commit,state}){
            const data = await firebase.database().ref('games').get().then(value => {
                    const m = value.val()
                    const newm = []
                    Object.keys(m).map((item) => {
                        newm.push({id: item, ...m[item]})
                    })
                    state.data = newm
                }
            )
        }
    },
    getters:{
        getData(state){
            return state.data
        }
    }
}
