<template>
  <b-container>
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
    <b-button @click="login()">Login</b-button>
    <b-button>Cadastrar</b-button>
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
        .then((result) => {})
        .catch((err) => {
          console.log('Falhou')
          console.log(err)
        })
    },
  },
}
</script>
