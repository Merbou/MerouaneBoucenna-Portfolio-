<template>
  <div id="app">
    <vue-particles class="particles" />
    <header-app :header="header" id="header" />
    <about-app :about="header" id="about" />
    <capabilities :capabilities="capabilities" id="capabilities" />
    <!-- <works-app :works="works" id="works" /> -->
  </div>
</template>

<script>
// import jump from "jump.js";
import HeaderApp from "./components/header";
import AboutApp from "./components/about";
import Capabilities from "./components/capabilities";
// import WorksApp from "./components/works";

export default {
  name: "App",
  components: {
    HeaderApp,
    AboutApp,
    Capabilities,
    // WorksApp 
  },
  data() {
    return {
      header: false,
      about: false,
      capabilities: false,
      works: false,
    };
  },
  mounted() {
    this.scroll();
  },
  methods: {
    scroll() {
      if ("IntersectionObserver" in window) {
        const elements = ["header", "about", "capabilities","works"];
        // const targets = new Map(elements.map(e => [e, 0]));
        var options = {
          root: null,
          rootMargin: "0px",
          threshold: [1.0, 0.75, 0.5, 0.25]
        };
        let observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.intersectionRatio > 0.7) this[entry.target.id] = true;
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
  padding-top: 100px;
}
#capabilities {
  padding-top: 100px;
  height: 110vh;
}
#works {
  padding-top: 100px;
  height: 110vh;
}
</style>