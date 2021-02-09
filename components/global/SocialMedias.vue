<template>
  <b-container class="mx-auto social">
    <b-button
      :variant="color"
      pill
      href="https://www.instagram.com/madqueenrock/"
      target="_blank"
    >
      <b-icon-instagram />
    </b-button>
    <b-button
      :variant="color"
      pill
      href="https://www.facebook.com/madqueenrock/"
      target="_blank"
    >
      <b-icon-facebook />
    </b-button>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      color: 'dark',
    }
  },
}
</script>
<style>
#b-button:hover {
  background: rgb(0, 35, 89);
}

.social {
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
