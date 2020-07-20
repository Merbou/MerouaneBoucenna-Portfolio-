<template>
  <section>
    <div class="container-works">
      <div
        class="card"
        data-tilt
        data-tilt-max="10"
        data-tilt-speed="500"
        data-tilt-perspective="1000"
      >
        <div class="card-title">
          <span>Vus</span>
        </div>
        <div class="card-content">
          <div class="card-img">
            <img src="/img/projet_1.png" alt srcset />
          </div>
          <span>Full init app for develepoment a platforms</span>
        </div>
        <div class="card-footer">
          <div class="card-footer-content">
            <span>225hr</span>
            <icon class="svg" name="clock" fill="#fff" />
            <span>150L</span>
            <icon class="svg" name="coffee" fill="#fff" />
          </div>
        </div>
      </div>
      <div
        class="card"
        data-tilt
        data-tilt-max="10"
        data-tilt-speed="500"
        data-tilt-perspective="1000"
      >
        <div class="card-title">
          <span>Vus</span>
        </div>
        <div class="card-content">
          <div class="card-img">
            <img src="/img/projet_1.png" alt srcset />
          </div>
          <span>Full init app for develepoment a platforms</span>
        </div>
        <div class="card-footer">
          <div class="card-footer-content">
            <span>225hr</span>
            <icon class="svg" name="clock" fill="#fff" />
            <span>150L</span>
            <icon class="svg" name="coffee" fill="#fff" />
          </div>
        </div>
      </div>
      <div
        class="card"
        data-tilt
        data-tilt-max="10"
        data-tilt-speed="500"
        data-tilt-perspective="1000"
      >
        <div class="card-title">
          <span>Vus</span>
        </div>
        <div class="card-content">
          <div class="card-img">
            <img src="/img/projet_1.png" alt srcset />
          </div>
          <span>Full init app for develepoment a platforms</span>
        </div>
        <div class="card-footer">
          <div class="card-footer-content">
            <span>225hr</span>
            <icon class="svg" name="clock" fill="#fff" />
            <span>150L</span>
            <icon class="svg" name="coffee" fill="#fff" />
          </div>
        </div>
      </div>
    </div>

    <div class="footer-scetion">
      <span>{{animatedCount}}hr</span>
      <icon class="svg-footer-section" name="clock" fill="#fff" />
      <span>{{animatedCount}}L</span>
      <icon class="svg-footer-section" name="coffee" fill="#fff" />
    </div>
  </section>
</template>

<script>
import icon from "../icons";
import vanillaTilt from "vanilla-tilt";
import gsap from "gsap";

export default {
  name: "works",
  components: {
    icon
  },
  props: {
    works: {
      type: Boolean
    },
    duration: {
      type: Number,
      default: 4
    }
  },
  data() {
    return {
      count: 0
    };
  },
  mounted() {
    Array.from(document.getElementsByClassName("card")).forEach(element => {
      vanillaTilt.init(element);
    });
  },
  computed: {
    animatedCount: function() {
      return this.count.toFixed(0);
    }
  },
  methods: {
    countTo() {
      gsap.to(this.$data, { duration: this.duration, count: 255 });
    }
  },
  watch: {
    works() {
      this.countTo();
    }
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
  display: flex;
  flex-direction: column;
}
.container-works {
  width: 100%;
  display: flex;
  z-index: 55;
  justify-content: space-around;
}
.card {
  position: relative;
  width: 350px;
  height: 400px;
  background: linear-gradient(
    to bottom,
    rgba(225, 151, 105, 0.7) 5%,
    rgba(66, 21, 200, 0.7) 90%
  );
  transform-style: preserve-3d;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}

.card-title {
  position: absolute;
  width: 80%;
  top: 30px;
  height: 10%;
  display: flex;
  justify-content: center;
}
.card-content {
  position: absolute;
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card-content span {
  transform: translateZ(20px);
}
.card-img img {
  max-width: 100%;
  max-height: 100%;
  transform: translateZ(30px);
}
.card-footer {
  position: absolute;
  height: 10%;
  width: 80%;
  bottom: 5px;
  display: flex;
  justify-content: center;
}
.card-title span {
  background: linear-gradient(to right, #fdfbfb, #ebedee 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: justify;
  top: 30px;
}
.card-content span {
  background: linear-gradient(to right, #fdfbfb, #ebedee 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: justify;
}
.card-footer-content {
  background: linear-gradient(to right, #fdfbfb, #ebedee 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: justify;
  display: flex;
}
.card-footer-content span {
  margin-top: 14px;
}
.svg {
  width: 30px;
  height: 30px;
  margin: 7px;
}

.footer-scetion {
  z-index: 55;
  background: linear-gradient(to right, #fdfbfb, #ebedee 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  justify-content: center;
}
.footer-scetion span {
  margin-top: 31px;
  font-size: 55px;
}
.svg-footer-section {
  width: 100px;
  height: 100px;
  margin: 10px;
  margin-right: 50px;
}
</style>