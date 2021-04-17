<template>
  <b-button @click="goBack()"> <b-icon-arrow-left /></b-button>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1)
    },
  },
}
</script>

<style></style>
