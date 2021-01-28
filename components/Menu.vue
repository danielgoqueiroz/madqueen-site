<template>
  <b-container class="col-xs-1 text-center">
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="dark"
      class="bg-transparent center-block"
    >
      <b-navbar-brand to="/"><Logo /></b-navbar-brand>
    </b-navbar>
  </b-container>
</template>

<script>
import Logo from '@/components/Logo'
export default {
  components: {
    Logo,
  },
}
</script>
<style>
#b-navbar-brand {
  text-align: center;
}
</style>
