<template>
  <div id="app">
    <header-app />
    <about />
  </div>
</template>

<script>
import HeaderApp from "./components/header";
import About from "./components/about";

export default {
  name: "App",
  components: {
    HeaderApp,
    About
  }
};
</script>
