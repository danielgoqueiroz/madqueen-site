<template>
  <b-container class="contact">
    <h1>Contato</h1>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="E-mail"
        label-for="input-email"
        description="Endereço de e-mail"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Digite o seu e-mail"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nome:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Qual o seu nome?"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Assunto:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.subject"
          placeholder=""
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          id="checkbsoxes-4"
          v-model="form.checked"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="newsletter"
            >Quero receber novidades por e-mail</b-form-checkbox
          >
        </b-form-checkbox-group>
        <b-form-group>
          <b-form-textarea
            id="textarea"
            v-model="form.text"
            placeholder="Escreva algo..."
            max-rows="10"
            rows="3"
          />
        </b-form-group>
      </b-form-group>

      <b-button type="reset" variant="danger">Apagar</b-button>
      <b-button type="submit" variant="info">Enviar</b-button>
    </b-form>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: [],
        text,
        subject,
      },
      motive: [
        { text: 'Motivo', value: null },
        'Mensagem',
        'Shows',
        'Parceria',
        'Sugestão',
      ],
      show: true,
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
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
