<template>
  <section>
    <div class="container-works">
      <div
        class="projet"
        data-tilt
        data-tilt-max="50"
        data-tilt-speed="400"
        data-tilt-perspective="500"
      ></div>
    </div>
  </section>
</template>

<script>
import vanillaTilt from "vanilla-tilt";
export default {
  name: "works",
  props: {
    works: {
      type: Boolean
    }
  },
  mounted() {
    vanillaTilt.init(document.querySelector(".projet"), {
      max: 25,
      speed: 400
    });
  }
};
</script>

<style scoped>
section {
  overflow: hidden;
  width: 100%;
  background: -webkit-linear-gradient(
    to top,
    rgb(108, 229, 250),
    rgb(53, 3, 186)
  );
  background: linear-gradient(to top, rgb(108, 229, 250), rgb(53, 3, 186));
}
.container-works {
  display: flex;
  z-index: 55;
  justify-content: space-around;
}
.projet {
  width: 400px;
  height: 400px;
  background: red;
}
</style>