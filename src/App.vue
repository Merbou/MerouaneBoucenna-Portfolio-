<template>
  <div id="app">
    <vue-particles class="particles" />
    <header-app />
    <about />
    <capabilities />
  </div>
</template>

<script>
import HeaderApp from "./components/header";
import About from "./components/about";
import Capabilities from "./components/capabilities";

export default {
  name: "App",
  components: {
    HeaderApp,
    About,
    Capabilities
  }
};
</script>

<style scoped>
.particles {
  position: absolute;
  z-index: 1;
  height: 300vh;
  width: 100%;
}
</style>