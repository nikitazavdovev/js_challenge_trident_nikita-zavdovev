<template>
  <header class="header container">
    <h1 class="page-title">{{title}}</h1>
    <HeaderBag />
  </header>
</template>
<script>
  import HeaderBag from "./HeaderBag";

  export default {
    name: 'Header',
    components: {
      HeaderBag,
    },
    props: {
      title: String,
    }
  }
</script>
<style scoped lang="scss">
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 60px;
    align-items: center;

    text-transform: uppercase;
    background-color: #ffffff;
  }
  .page-title {
    font-size: 20px;
  }

</style>