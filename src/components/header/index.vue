<template>
  <header class="jumbotron jumbotron-fluid">
    <div class="container-fluid">
      <div id="scene">
        <div id="author" data-depth="0.5">
          <h1 class="author-name display-1">Merouane Boucenna</h1>
        </div>
        <h1 id="post-name" class="display-5" data-depth="0.2">
          Full Stack Web Developer
        </h1>
      </div>
      <div class="social-media">
        <icon
          class="svg"
          name="stackoverflow"
          fill="#fff"
          :to="'https://stackoverflow.com/users/9523354/merouane-boucenna'"
        />
        <icon
          class="svg"
          name="github"
          fill="#fff"
          :to="'https://github.com/Merbou'"
        />
        <icon
          class="svg"
          name="linkedin"
          fill="#fff"
          :to="'https://www.linkedin.com/in/merouane-boucenna'"
        />
      </div>
    </div>
  </header>
</template>

<script>
import Parallax from "parallax-js";
import icon from "../icons";
export default {
  name: "ScreenApp",
  components: {
    icon,
  },
  props: {
    header: {
      type: Boolean,
    },
  },
  mounted() {
    var scene = document.getElementById("scene");
    new Parallax(scene);
  },
};
</script>

<style scoped>
header {
  overflow: hidden;
  width: 100%;
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
  padding: 200px 100px 100px;
  position: absolute !important;
  top: 100px !important;
  font-size: 7vw;
  left: auto !important;
  color: #ffffff;
  width: 100%;
}
#author {
  color: #ffffff;
  padding: 150px 100px 100px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  position: absolute !important;
  top: 100px !important;
  font-size: 7vw;
  left: auto !important;
  width: 100%;
}
.author-name {
  margin-bottom: 5px;
  width: 100%;
}
.social-media {
  position: absolute;
  z-index: 55;
  bottom: 0px;
  right: 0px;
}
.social-media svg {
  width: 6vw;
  margin: 10px;
}
@media only screen and (max-width: 720px) {
  #author {
    padding: 240px 0px 100px;
  }
  #post-name {
    padding: 200px 0px 100px;
  }
}
</style>
