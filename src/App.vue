<template>
  <div id="app">
    <vue-particles class="particles" />
    <header-app id="header" />
    <about id="about" />
    <capabilities />
  </div>
</template>

<script>
// import jump from "jump.js";
import HeaderApp from "./components/header";
import About from "./components/about";
import Capabilities from "./components/capabilities";

export default {
  name: "App",
  components: {
    HeaderApp,
    About,
    Capabilities
  },
  mounted() {
    this.scroll();
  },
  methods: {
    scroll() {
      if ("IntersectionObserver" in window) {
        // supported

        const elements = ["header", "about"];
        var options = {
          root: null,
          rootMargin: "0px",
          threshold: 1.0
        };
        let observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            console.log(entry.target);
          });
        }, options);

        elements.forEach(element => {
          observer.observe(document.querySelector(`#${element}`));
        });

        // console.log(observer);
      }
    }
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