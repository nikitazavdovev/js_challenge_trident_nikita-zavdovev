<template>
  <div id="app">
    <Header :title="'BRAND'"/>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
};
</script>

<style lang="scss">
  @font-face{
    font-family: 'Lato-Bold';
    src: url('./assets/fonts/Lato-Bold.ttf') format('ttf');
  }
  @font-face{
    font-family: 'Lato-BoldItalic';
    src: url('./assets/fonts/Lato-BoldItalic.ttf') format('ttf');
  }
  @font-face{
    font-family: 'Lato-Italic';
    src: url('./assets/fonts/Lato-Italic.ttf') format('ttf');
  }
  @font-face{
    font-family: 'Lato-Regular';
    src: url('./assets/fonts/Lato-Regular.ttf') format('ttf');
  }

  body {
    margin: 0;
    font-family: 'Lato-Regular', sans-serif;
    font-size: 13px;
    text-rendering: optimizeLegibility;

    -moz-osx-font-smoothing: grayscale;  /* Font smoothing tweaks for MacOSx in Gecko */
    -webkit-font-smoothing: antialiased;

    color: #444A59;
    background-color: #f8f8f8;
  }
  * {
    box-sizing: border-box;
  }

  h1, p, figure {
    margin: 0;
    font-weight: normal;
  }

  a,
  a:hover,
  a:visited{
    text-decoration: none;
    color: #444A59;
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  button {
    appearance: none;
    border: 0;
  }

  main {
    display: flex;
    flex-direction: row;
    margin: 10px 0 20px;
    flex: 1 0 auto;
    @media (min-width: 768px){
      margin: 30px 0 20px;
    }
  }

  .container {
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
    @media (min-width: 576px) {
      max-width: 560px;
    }
    @media (min-width: 768px){
      max-width: 720px;
      padding: 0 40px;
    }
    @media (min-width: 992px) {
      max-width: 960px;
    }
    @media (min-width: 1200px) {
      max-width: 1120px;
    }
    @media (min-width: 1366px) {
      max-width: 1240px;
    }
  }

  .icon {
    width: 20px;
    height: 20px;
    fill: #d9d9d9;
    transition: .3s fill;
  }

  .button {
    border: 1px solid #d9d9d9;
    border-radius: 100px;
    background-color: #ffffff;

    cursor: pointer;
    transition: .3s border, .3s color, .3s background-color;

    &--round {
      display: block;
      border-radius: 50%;
    }
    &--primary {
      padding: 13px;

      font-family: 'Lato-Bold', sans-serif;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 1.39px;
      &:hover {
        border: 1px solid #444A59;
        color: #ffffff;
        background-color: #444A59;
      }
    }
    &--wishlist {
      &:hover {
        border: 1px solid #444A59;
         .icon {
          fill: #444A59;
        }
      }
    }
    &--in-cart {
      pointer-events: none;
      background-color: #d9d9d9;
    }
    &--in-wish-list {
      border: 1px solid #757c8b;
      & .icon {
        fill: #757c8b;
      }
    }
  }
</style>
