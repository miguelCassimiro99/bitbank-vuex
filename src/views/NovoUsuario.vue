<template>
  <div class="container">
      <h1>Novo Usuario</h1>
      <form @submit.prevent="enviaFormulario">
          <div class="form-group">
              <label for="nome">Nome</label>
              <input type="text" class="form-control" id="nome" v-model="usuario.nome">
          </div>
          <div class="form-group">
              <label for="email">E-mail</label>
              <input type="email" class="form-control" id="email" v-model="usuario.email">
          </div>
          <div class="form-group">
              <label for="senha">Senha</label>
              <input type="password" class="form-control" id="senha" v-model="usuario.senha">
          </div>
          <button class="btn btn-primary" type="submit">Salvar</button>
      </form>
  </div>
</template>

<script>

// import http from '@/http'

export default {
    data(){
        return {
            usuario: {
                nome: '',
                email: '',
                senha: ''
            }
        }
    },
    methods: {
        enviaFormulario(){
            // console.log(this.usuario);
            this.$http.post("auth/register", this.usuario)
            .then(resposta => {
                console.log(resposta);
                this.$router.push({ name: 'login' })
            })
            .catch(erro => console.log(erro))
        }
    }

}
</script>

<style>

</style>