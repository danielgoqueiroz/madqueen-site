<template>
  <b-container>
    <b-card>
      <b-list-group>
        <b-list-group-item button>Cras justo odio</b-list-group-item>
        <b-list-group-item button>Dapibus ac facilisis in</b-list-group-item>
        <b-list-group-item button>Morbi leo risus</b-list-group-item>
        <b-list-group-item button>Porta ac consectetur ac</b-list-group-item>
        <b-list-group-item button>Vestibulum at eros</b-list-group-item>
      </b-list-group>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    getMusics() {
      this.$api
        .get('/music')
        .then((result) => {
          console.log(result)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  mounted() {
    this.getMusics()
  },
}
</script>
<style></style>
