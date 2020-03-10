<template>
  <footer class="footer container">
    <p class="footer__sidenote">Footer</p>
  </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped lang="scss">
  .footer {
    height: 60px;

    display: flex;
    flex-direction: row;
    align-items: center;

    text-transform: uppercase;
    background-color: #ffffff;
    &__sidenote {
      font-family: 'Lato-Bold', sans-serif;
      letter-spacing: 1.37px;
    }
  }
</style>