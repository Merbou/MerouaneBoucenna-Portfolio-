<template>
  <header>
    <div id="scene">
      <div id="post-name" data-depth="0.2">Full Stack Web Developer</div>
      <div id="author" data-depth="0.5">
        <h1 class="author-name">Merouane Boucenna</h1>
      </div>
    </div>
    <div class="social-media">
      <icon
        class="svg"
        name="stackoverflow"
        fill="#fff"
        :to="'https://stackoverflow.com/users/9523354/merouane-boucenna'"
      />
      <icon class="svg" name="github" fill="#fff" :to="'https://github.com/Merbou'" />
      <icon class="svg" name="facebook" fill="#fff" :to="'https://www.facebook.com/Merouane.MB0'" />
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
  padding: 100px;
  padding-top: 200px;
  position: absolute !important;
  top: 0px !important;
  font-size: 5vw;
  left: auto !important;
  color: #ffffff;
  width: 100%;
}
#author {
  padding: 100px;
  color: #ffffff;
  padding-top: 250px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  position: absolute !important;
  top: 0px !important;
  font-size: 5vw;
  left: auto !important;
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

@media only screen and (max-width: 950px) {
  #author {
    padding: 40px;
    padding-top: 240px;
  }
  .social-media svg {
    width: 7vw;
  }
}

@media only screen and (max-width: 420px) {
  #author {
    padding: 30px;
    padding-top: 240px;
  }
  #post-name {
    padding: 30px;
    padding-top: 200px;
    font-size: 6vw;
  }
  .social-media svg {
    width: 10vw;
  }
}
</style>
