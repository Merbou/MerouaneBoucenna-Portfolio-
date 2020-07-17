<template>
  <div id="app">
    <vue-particles class="particles" />
    <header-app id="header" />
    <about-app id="about" />
    <capabilities id="capabilities" />
  </div>
</template>

<script>
import jump from "jump.js";
import HeaderApp from "./components/header";
import AboutApp from "./components/about";
import Capabilities from "./components/capabilities";

export default {
  name: "App",
  components: {
    HeaderApp,
    AboutApp,
    Capabilities
  },
  mounted() {
    this.scroll();
  },
  methods: {
    scroll() {
      if ("IntersectionObserver" in window) {
        const elements = ["header", "about", "capabilities"];
        const targets = new Map([[elements[0],0.0],
         [elements[1],0.0],
         [elements[2],0.0]]);
        var options = {
          root: null,
          rootMargin: "0px",
          threshold: [1.0, 0.75, 0.5, 0.25]
        };
        let observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if(targets.get(entry.target.id)>entry.intersectionRatio){
              jump(`#${elements[elements.indexOf(entry.target.id)+1]}`)
            }
            targets.set(entry.target.id,entry.intersectionRatio)
          });
          targets.forEach((value,target) => {
            console.log(target,value)
          })
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
  height: 270vh;
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
</style>