<template>
  <b-container class="contact">
    <h1>Contatos</h1>
    <b-row>
      <b-col>
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group
            id="input-group-1"
            label="E-mail"
            label-for="input-email"
            description="Endereço de e-mail"
          >
            <b-form-input
              id="input-1"
              v-model="form.from"
              :state="isFromValid()"
              type="email"
              placeholder="Digite o seu e-mail"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Assunto:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.subject"
              :state="isTextValid(form.subject)"
              placeholder=""
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-4">
            <b-form-group>
              <b-form-textarea
                id="textarea"
                v-model="form.message"
                :state="isTextValid(form.message)"
                placeholder="Escreva algo..."
                max-rows="10"
                rows="3"
                required
              />
            </b-form-group>
            <b-alert
              :show="dismissCountDown"
              dismissible
              variant="success"
              @dismissed="dismissCountDown = 0"
              @dismiss-count-down="countDownChanged"
            >
              <p>A mensagem foi enviada com sucesso {{ dismissCountDown }}</p>
              <b-progress
                variant="info"
                :max="dismissSecs"
                :value="dismissCountDown"
                height="4px"
              ></b-progress>
            </b-alert>
          </b-form-group>

          <b-button type="reset" variant="danger">Apagar</b-button>
          <b-button type="submit" variant="info">Enviar</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      dismissCountDown: 0,
      dismissSecs: 5,
      showDismissibleAlert: false,
      form: {
        from: '',
        subject: '',
        message: '',
      },
    }
  },
  created() {
    this.startServer()
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
    isFromValid() {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regex.test(String(this.form.from).toLowerCase())
    },
    isTextValid(text) {
      return text === null || text === undefined || text.length > 5
    },
    async onSubmit(event) {
      event.preventDefault()
      await this.sendEmail()
    },
    onReset(event) {
      event.preventDefault()
      this.form.from = ''
      this.form.subject = ''
      this.form.message = ''
    },
    startServer() {
      this.$axios({
        method: 'get',
        url: 'http://madqueen.herokuapp.com/api/',
      })
    },
    async sendEmail() {
      await this.$axios({
        method: 'post',
        headers: {
          headers: { 'Access-Control-Allow-Origin': '*' },
        },
        url: 'http://madqueen.herokuapp.com/api/email/',
        data: this.form,
      })
        .then((response) => {
          this.showAlert()
        })
        .catch(function (error) {
          console.log(error)
        })
    },
  },
}
</script>
<style>
.contact {
  color: rgb(192, 192, 192);
  border-radius: 15px;
  margin-block: 15px;
  padding: 25px;
  background: rgb(46, 5, 5);
}

.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
