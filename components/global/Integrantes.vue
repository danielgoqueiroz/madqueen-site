<template>
  <b-container style="text-align: center">
    <h1>Integrantes</h1>
    <transition-group name="btn-effect">
      <b-button
        v-for="integrante in integrantes"
        :key="integrante.title"
        class="btn"
        @click="integranteSelected = integrante"
      >
        <b-img
          class="avatar"
          :src="integrante.avatar"
          v-bind="avatarProps"
          rounded="circle"
        />
      </b-button>
    </transition-group>
    <Integrante
      :title="integranteSelected.title"
      :description="integranteSelected.description"
      :alt="integranteSelected.alt"
      :about="integranteSelected.about"
      :imgsslide="
        integranteSelected.imgsslide != undefined
          ? integranteSelected.imgsslide
          : []
      "
      :influences="integranteSelected.influences"
    />
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      integranteSelected: {},
      integrantes: {},
      avatarProps: {
        width: 50,
        height: 50,
        class: 'm1',
      },
      error: '',
    }
  },
  async mounted() {
    await this.$content('about')
      .fetch()
      .then((result) => {
        this.integrantes = result
        this.integranteSelected = this.integrantes[0]
      })
      .catch((err) => {
        this.error = err
      })
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>
<style>
.btn,
.btn:hover,
.btn:active,
.btn:link {
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
  border-radius: 100%;
}
.avatar:hover {
  border: 0 solid white;
  size: 25px;
}

.btn-effect-enter-active {
  transition: all 0.3s ease;
}
.btn-effect-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.btn-effect-enter,
.btn-effect-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
