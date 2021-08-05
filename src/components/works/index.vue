<template>
  <section class="jumbotron jumbotron-fluid">
    <div class="container-fluid">
      <div class="row">
        <div class="title-works">
          <h1>My works</h1>
        </div>
      </div>
      <div class="row">
        <div
          class="col-md-4 col-sm-6 col-12 col-card"
          v-for="projet in projets"
          :key="projet.title"
        >
          <div
            class="card"
            data-tilt
            data-tilt-max="10"
            data-tilt-speed="500"
            data-tilt-perspective="1000"
            :key="projet.title"
          >
            <div class="card-title">
              <span>{{ projet.title }}</span>
            </div>
            <div class="card-content">
              <div class="card-img" @click="redirectTo(projet)">
                <img :src="projet.img" alt srcset />
              </div>
              <span>{{ projet.description }}</span>
            </div>
            <div class="card-footer">
              <div class="card-footer-content">
                <span>{{ projet.timeWork }}hrs</span>
                <icon class="svg" name="clock" fill="#fff" />
                <span>{{ projet.litreCoffee }}L</span>
                <icon class="svg" name="coffee" fill="#fff" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="footer-scetion">
          <span>{{ animatedCountTimeWork }}hrs</span>
          <icon class="svg-footer-section" name="clock" fill="#fff" />
          <span>{{ animatedCountLitreCoffee }}L</span>
          <icon class="svg-footer-section" name="coffee" fill="#fff" />
        </div>
      </div>
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
    icon,
  },
  props: {
    works: {
      type: Boolean,
    },
    duration: {
      type: Number,
      default: 4,
    },
  },
  data() {
    return {
      countLitre: 0,
      countTime: 0,
      projets: [
        {
          title: "Vus",
          description: "beautiful dashboard combination of Laravel, Vue.js",
          img: "/img/vus.png",
          code_source: "https://github.com/Merbou/vus",
          timeWork: 120,
          litreCoffee: 2.5,
        },
        {
          title: "B2B",
          description: "A platform for organizing business to business",
          img: "/img/b_2_b.png",
          timeWork: 240,
          litreCoffee: 30,
        },
        {
          title: "CareMed",
          description: "Application for managing medical appointments",
          code_source: "https://github.com/Merbou/caremed",
          img: "/img/care_med.png",
          timeWork: 102,
          litreCoffee: 4.5,
        },
      ],
    };
  },
  mounted() {
    Array.from(document.getElementsByClassName("card")).forEach((element) => {
      vanillaTilt.init(element);
    });
  },
  computed: {
    animatedCountLitreCoffee: function () {
      return this.countLitre.toFixed(1);
    },
    animatedCountTimeWork: function () {
      return this.countTime.toFixed(0);
    },
  },
  methods: {
    countTo(prams) {
      gsap.to(this.$data, prams);
    },
    total(attrb) {
      return this.projets
        .map((e) => e[attrb])
        .reduce((acc, curr) => acc + curr, 0);
    },
    redirectTo({ code_source, img }) {
      img && this.$zoom(img);
      code_source && window.open(code_source);
    },
  },
  watch: {
    works() {
      this.countTo({
        duration: this.duration,
        countLitre: this.total("litreCoffee"),
      });
      this.countTo({
        duration: this.duration,
        countTime: this.total("timeWork"),
      });
    },
  },
};
</script>

<style scoped>
section {
  overflow: hidden;
  width: 100%;
  background: rgb(6, 5, 75);
  display: flex;
  flex-direction: column;
}

.title-works {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12%;
}
.title-works h1 {
  color: #ffffff;
  font-size: 7vw;
  z-index: 55;
}
.col-card {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  position: relative;
  width: 90%;
  z-index: 55;
  margin-top: 10px;
  height: 400px;
  background: linear-gradient(
    to bottom,
    rgb(58 24 192) 0%,
    rgb(227 154 101) 100%
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
  top: 0px;
  font-size: 30px;
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
.card-img {
  cursor: pointer;
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
  bottom: 15px;
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
  font-size: 14px;
}
.card-footer-content {
  background: linear-gradient(to right, #fdfbfb, #ebedee 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: justify;
  display: flex;
}
.card-footer-content span {
  margin-top: 8px;
}
.svg {
  z-index: 55;
  width: 30px;
  height: 30px;
  margin: 0px 5px 0px 5px;
}

.footer-scetion {
  background: linear-gradient(to right, #fdfbfb, #ebedee 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  height: 15%;
  width: 100%;
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-scetion span {
  margin-top: 5px;
  font-size: 4vw;
}
.svg-footer-section {
  z-index: 55;
  width: 6vw;
  height: 6vw;
  margin: 20px;
}
</style>