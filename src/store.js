import Vuex from 'vuex'
import Vue from 'vue'
import http from '@/http'

Vue.use(Vuex)

const estado = {
    token: null,
    usuario: {}
}

const mutations = {
    DEFINIR_USUARIO_LOGADO(state, { token, usuario }){
        state.token = token
        state.usuario = usuario
    },
    DESLOGAR_USUARIO(state){
        state.token = null,
        state.usuario = {}      
    }
}

const actions = {
    efetuarLogin({ commit }, usuario){
        return new Promise((resolve, reject)=>{
            http.post('auth/login', usuario)
            .then(response => {
                commit('DEFINIR_USUARIO_LOGADO', {
                    token: response.data.access_token,
                    usuario: response.data.user
                })
                resolve(response.data)
            })
            .catch(err => {
                console.log(err)
                reject(err)
            })
        })
    }
}

const getters = {
    usuarioLogado: state => Boolean(state.token)
}

export default new Vuex.Store({
    state: estado,
    mutations,
    actions,
    getters 
})

/**
 * in projects that vuex are used, the actions in http (requests) are storage in the store(vuex)
 * a part the mutations and the store, the vuex provides the actions
 * actions are defined in lower case where mutations are defined in Upper case 
 * the efetuarLogin receives a vuex context, and in this case we need to do a commit passing a user
 * and returning a Promise
 */