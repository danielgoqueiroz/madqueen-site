<template>
  <b-container class="d-flex justify-content-center">
    <b-card>
      <h1>Login</h1>
      <b-form-input
        v-model="user.username"
        placeholder="Nome"
        flex
      ></b-form-input>
      <b-form-input
        v-model="user.password"
        type="password"
        placeholder="Senha"
        flex
      ></b-form-input>
      <b-button v-on:click="login()">Login</b-button>
      <b-button>Cadastrar</b-button>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: 'usuarioteste',
        password: 'senhateste',
      },
    }
  },
  methods: {
    login() {
      this.$api
        .$post('/login', this.user)
        .then((result) => {
          redirect
        })
        .catch((err) => {
          console.log('Falhou')
          console.log(err)
        })
    },
  },
}
</script>

<style></style>
