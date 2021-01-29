<template>
  <div class="logo">
    <b-link to="/"><Logo /></b-link>
  </div>
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
.logo {
  text-align: center;
}
</style>
