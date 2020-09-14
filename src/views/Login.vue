<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit="efetuarLogin">
        <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" class="form-control" v-model="usuario.email">
            </div>
            <div class="form-group">
                <label for="senha">Senha</label>
                <input type="password" class="form-control" v-model="usuario.senha">
            </div>
            <p class="alert alert-danger" v-if="mensagemErro"> {{ mensagemErro }}</p>
            <button type='submit' class="btn btn-primary brn-block"> 
                Logar 
            </button>
            <router-link :to="{ name: 'novo.usuario' }">
                Não possui um cadastro, cadastre-se aqui!
            </router-link>
        
    </form>
  </div>
</template>

<script>


/* import http from '@/http'

    @ refers to the src directory
    using the webpack, you don't need to specify the extension of the file
    and if the file is named 'index', you don't need to put on the path, because the webpack gets
    automaticaly
    now can be able to change the url on the methos
    As a refactor, we send the http creating a global var $http on main.js
    So this import does't is necessary anymore 
*/

export default {
    data () {
        return {
            usuario: {},
            mensagemErro: ''
        }
    },
methods: {
    efetuarLogin () {
        this.$store.dispatch('efetuarLogin', this.usuario)
            .then(() => {
                this.$router.push({name: 'gerentes'})
                this.mensagemErro = ''
            })
            .catch(erro => {
                if(erro.request.status === 401){
                    this.mensagemErro = 'E-mail ou Senha inválido(s)'
                }
            })

        // this.$http.post('auth/login', this.usuario)
        //      .then(response => {
        //          console.log(response);
        //          localStorage.setItem('token', response.data.access_token);
        //         this.$store.state.token = response.data.access_token
        //         this.$store.state.usuario = response.data.user
        //         this.$store.commit('DEFINIR_USUARIO_LOGADO', {
        //             token: response.data.access_token,
        //             usuario: response.data.user
        //         })
        //         this.$router.push({ name: 'gerentes' })
        //      })
        //      .catch(erro => console.log(erro))
    }

}
}
</script>

<style>

</style>