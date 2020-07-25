<template>
  <div id="app">
    <loader :loading="loading" />
    <vue-particles class="particles" />
    <Header :header="header" id="header" @hook:mounted="offLoader" />
    <about :about="about" id="about" />
    <capabilities :capabilities="capabilities" id="capabilities" />
    <works :works="works" id="works" />
    <Footer :footer="footer" id="footer" />
  </div>
</template>

<script>
import loader from "./materials/loader";
import Header from "./components/header";
import About from "./components/about";
import Capabilities from "./components/capabilities";
import Works from "./components/works";
import Footer from "./components/footer";

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
  },
  methods: {
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

body {
  padding: 0px;
  margin: 0px;
  font-family: pix;
}
.particles {
  position: absolute;
  z-index: 1;
  height: 455vh;
  width: 100%;
}
#header {
  height: 100vh;
}
#about {
  padding-top: 100px;
  height: 110vh;
}
#capabilities {
  padding-top: 100px;
  height: 114vh;
}
#works {
  padding-top: 100px;
  height: 110vh;
}
#footer {
  padding-top: 30px;
  height: 21vh;
}

.__image-zoom__img-outer-container {
  zoom: 0.8 !important;
}
</style>