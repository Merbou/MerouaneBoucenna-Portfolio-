<template>
  <div id="app">
    <vue-particles class="particles" />
    <header-app :header="header" id="header" />
    <about-app :about="about" id="about" />
    <capabilities :capabilities="capabilities" id="capabilities" />
    <works-app :works="works" id="works" />
    <footer-app :footer="footer" id="footer" />
  </div>
</template>

<script>
// import jump from "jump.js";
import HeaderApp from "./components/header";
import AboutApp from "./components/about";
import Capabilities from "./components/capabilities";
import WorksApp from "./components/works";
import FooterApp from "./components/footerApp";

export default {
  name: "App",
  components: {
    HeaderApp,
    AboutApp,
    Capabilities,
    WorksApp,
    FooterApp
  },
  data() {
    return {
      header: false,
      about: false,
      capabilities: false,
      works: false,
      footer: false
    };
  },
  mounted() {
    this.scroll();
  },
  methods: {
    scroll() {
      if ("IntersectionObserver" in window) {
        const elements = ["header", "about", "capabilities", "works", "footer"];
        // const targets = new Map(elements.map(e => [e, 0]));
        var options = {
          root: null,
          rootMargin: "0px",
          threshold: [1.0, 0.75, 0.5, 0.25]
        };
        let observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.intersectionRatio > 0.5) this[entry.target.id] = true;
            if (entry.intersectionRatio < 0.3) this[entry.target.id] = false;
          });
        }, options);

        elements.forEach(element => {
          observer.observe(document.querySelector(`#${element}`));
        });
      }
    }
  }
};
</script>

<style scoped>
.particles {
  position: absolute;
  z-index: 1;
  height: 420vh;
  width: 100%;
}
#header {
  height: 100vh;
}
#about {
  height: 100vh;
}
#capabilities {
  height: 110vh;
}
#works {
  height: 102vh;
}
#footer {
  padding-top: 25px;
  height: 20vh;
}
</style>