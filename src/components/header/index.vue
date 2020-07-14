<template>
  <header>
    <div id="scene">
      <vue-particles data-depth="0.1" />
      <div id="post-name" data-depth="0.2">Full Stack Web Developer</div>
      <div id="author" data-depth="0.5">
        <h1 class="author-name">Merouane Boucenna</h1>
        <div class="social-media">
          <icons class="svg" name="github" fill="#fff" />
          <icons class="svg" name="facebook" fill="#fff" />
          <icons class="svg" name="twitter" fill="#fff" />
        </div>
      </div>
      <!-- <img src="/computer.png" alt="computer" height="500" class="computer" />
      <img src="/ball_1.png" alt="ball_1" height="200" class="ball_1" />
      <img src="/ball_1.png" alt="ball_2" height="200" class="ball_2" />
      <img src="/ball_1.png" alt="ball_3" height="200" class="ball_3" />-->
    </div>
  </header>
</template>

<script>
import Parallax from "parallax-js";
import icons from "./icons";
export default {
  name: "ScreenApp",
  components: {
    icons
  },
  mounted() {
    var scene = document.getElementById("scene");
    new Parallax(scene);
  }
};
</script>

<style scoped>
header {
  overflow: hidden;
  width: 100%;
  height: 100vh;

  background: -webkit-linear-gradient(
    to bottom,
    rgb(108, 229, 250),
    rgb(53, 3, 186)
  );
  background: linear-gradient(to bottom, rgb(108, 229, 250), rgb(53, 3, 186));
}
#scene {
  bottom: 0px;
  top: 0px;
  right: 0px;
  z-index: 4;
  left: 0px;
}
#post-name {
  z-index: 4;
  padding: 100px;
  position: absolute !important;
  top: 0px !important;
  font-size: 70px;
  left: auto !important;
  color: #ffffff;
}
#author {
  padding: 100px;
  color: #ffffff;
  z-index: 100;
  display: flex;
  flex-direction: column;
  position: absolute !important;
  top: 0px !important;
  font-size: 70px;
  left: auto !important;
}
.author-name {
  margin-bottom: 5px;
}
.social-media {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.social-media svg {
  width: 100px;
  margin: 10px;
}

/* .computer {
  position: absolute;
  top: 0px;
}
.ball_1 {
  position: absolute;
  top: 0px;
}
.ball_2 {
  position: absolute;
  top: 0px;
}
.ball_3 {
  position: absolute;
  top: 0px;
} */
</style>
