<template>
  <div id="app">
    <div id="particles-js"></div>
    <loader :loading="loading" />
    <Header :header="header" id="header" @hook:mounted="offLoader" />
    <about :about="about" id="about" />
    <capabilities :capabilities="capabilities" id="capabilities" />
    <works :works="works" id="works" />
    <Footer :footer="footer" id="footer" />
  </div>
</template>

<script>
import "particles.js";
import loader from "./materials/loader";
import Header from "./components/header";
import About from "./components/about";
import Capabilities from "./components/capabilities";
import Works from "./components/works";
import Footer from "./components/footer";
import particlesConfig from "./config/particles.config";
export default {
  name: "App",
  components: {
    loader,
    Header,
    About,
    Capabilities,
    Works,
    Footer,
  },
  data() {
    return {
      loading: false,
      header: false,
      about: false,
      capabilities: false,
      works: false,
      footer: false,
    };
  },
  created() {
    this.loading = true;
  },
  mounted() {
    this.scroll();
    this.initParticles();
  },
  methods: {
    initParticles() {
      window.particlesJS("particles-js", particlesConfig);
    },
    offLoader() {
      setTimeout(() => (this.loading = false), 2000);
    },
    scroll() {
      if ("IntersectionObserver" in window) {
        const elements = ["header", "about", "capabilities", "works", "footer"];
        var options = {
          root: null,
          rootMargin: "0px",
          threshold: [1.0, 0.75, 0.5, 0.25],
        };
        let observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio > 0.5) this[entry.target.id] = true;
            if (entry.intersectionRatio < 0.3) this[entry.target.id] = false;
          });
        }, options);

        elements.forEach((element) => {
          observer.observe(document.querySelector(`#${element}`));
        });
      }
    },
  },
};
</script>

<style>
@font-face {
  src: url(/fonts/pixelart.ttf);
  font-family: pix;
}

* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

html,
body {
  padding: 0px;
  margin: 0px;
  font-family: pix !important;
  /* height: 100%; */
}
#particles-js {
  position: absolute;
  opacity: 0.8;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}

canvas {
  display: block;
  vertical-align: bottom;
}
#header {
  height: 100vh;
}
#about,
#capabilities,
#works,
#footer {
  height: 100%;
}
#footer {
  padding: 30px 0px 0px;
}

.__image-zoom__img-outer-container {
  zoom: 0.8 !important;
}
</style>