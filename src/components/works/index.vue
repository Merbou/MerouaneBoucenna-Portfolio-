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
              <div
                class="card-img"
                v-b-modal.modal
                @click="injectProject(projet)"
              >
                <img
                  :src="projet.imgs && projet.imgs.length && projet.imgs[0]"
                  alt
                  srcset
                />
              </div>
              <span>{{ projet.summary }}</span>
            </div>
            <div class="card-footer-para">
              <div class="card-icon-footer">
                <div v-for="(tech, index) in projet.techs" :key="index">
                  <a :href="tech.url" target="_blank">
                    <img :src="tech.icon" class="img-tech" />
                  </a>
                </div>
              </div>
              <div class="card-svg-footer">
                <span>{{ projet.timeWork }}hrs</span>
                <icon class="svg-card-para" name="clock" fill="#fff" />
                <span>{{ projet.litreCoffee }}L</span>
                <icon class="svg-card-para" name="coffee" fill="#fff" />
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
    <b-modal
      id="modal"
      :title="projectModel.title"
      size="xl"
      centered
      hide-header-close
    >
      <Splide>
        <Splide-slide v-for="(img, index) in projectModel.imgs" :key="index">
          <div>
            <img :src="img" class="img-slider" />
          </div>
        </Splide-slide>
      </Splide>
      <template #modal-footer="{}">
        <p>{{ projectModel.description }}</p>
      </template>
    </b-modal>
  </section>
</template>

<script>
import icon from "../icons";
import vanillaTilt from "vanilla-tilt";
import { Splide, SplideSlide } from "@splidejs/vue-splide";

import gsap from "gsap";

export default {
  name: "works",
  components: {
    icon,
    Splide,
    SplideSlide,
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
      slide: 0,
      countLitre: 0,
      countTime: 0,
      projectModel: [],
      projets: [
        {
          title: "CareMed - 2018",
          summary: "Application for managing medical appointments",
          description:
            "my first challenger is to develop a medical appointment management application using only PHP for 15 days, my first thought is to organize the code, minimize errors, and given the ease of integrating the modules, To deliver the application on time, my solution is to develop first a micro-framework based on the MVC architecture",
          code_source: "https://github.com/Merbou/caremed",
          imgs: [
            "/img/projects/caremed/0.png",
            "/img/projects/caremed/1.png",
            "/img/projects/caremed/2.png",
          ],
          techs: [{ url: "https://www.php.net", icon: "/icon/php.png" }],
          timeWork: 102,
          litreCoffee: 1.5,
        },
        {
          title: "B2B - 2019",
          summary: "A platform for organizing business to business",
          description:
            "Platform to organize end-to-end meetings between companies participating in economic events. Before CCI she had difficulty in organizing meetings between these partners when the event occurred, everything is manual so expect to make mistakes and delays. In addition, the employees worked like machines. After using my design experience with UML and helping with the specs, I was able to develop this solution.",
          imgs: [
            "/img/projects/b2b/0.png",
            "/img/projects/b2b/1.png",
            "/img/projects/b2b/2.png",
            "/img/projects/b2b/3.png",
            "/img/projects/b2b/4.png",
            "/img/projects/b2b/5.png",
            "/img/projects/b2b/6.png",
          ],
          techs: [
            { url: "https://www.laravel.com", icon: "/icon/laravel.png" },
            {
              url: "https://www.getbootstrap.com",
              icon: "/icon/bootstrap.png",
            },
          ],
          timeWork: 270,
          litreCoffee: 4.5,
        },
        {
          title: "Vus - 2020 ",
          summary: "Production-ready solution for admin interfaces",
          description:
            "A production-ready solution for admin interfaces, after reading all the code of PanJiaChen / vue-element-admin (used by 15 users and more than 100 Contributors) several times I developed two of my own versions consecutively, 1st version: I added further changes and energized the application by adding the back-end using laravel and mysql, adding translations (French, Arabic), adding roles and permissions on actions and pages and etc ..., 2nd version (VUS): Solution Different from the PanJiaChen / vue-element-admin version but the same concept, I started to develop from 0, at the base of this solution I managed to create two vuejs plugins to publish in npm",
          imgs: ["/img/projects/vus/0.png", "/img/projects/vus/1.png"],
          techs: [
            { url: "https://www.laravel.com", icon: "/icon/laravel.png" },
            { url: "https://www.vuejs.org", icon: "/icon/vue.png" },
          ],
          code_source: "https://github.com/Merbou/vus",
          timeWork: 120,
          litreCoffee: 2.5,
        },
        {
          title: "Elis - 2020",
          summary:
            "(Electronic Laboratory Information System) An information system for the management of analysis laboratories and partners",
          description:
            "An information system for the management of analysis laboratories and partners, to summarize it is a socio-technical system it takes care of everything related to the analysis laboratory, I was an important element in my team and I was responsible for the administrative part (management of automatons, analyzes, conventions ...) and I participated in up to 275 contributions",
          imgs: ["/img/projects/elis/0.png"],
          techs: [
            { url: "https://www.laravel.com", icon: "/icon/laravel.png" },
            { url: "https://www.vuejs.org", icon: "/icon/vue.png" },
          ],
          timeWork: 630,
          litreCoffee: 9,
        },
        {
          title: "Covid19 Detector - 2021",
          summary: "smart system that uses deep learning to detect COVID19",
          description:
            "It's a smart system that uses deep learning to detect if a chest x-ray contains Ground-glass. If so, it classifies the lung as infected with covid 19",
          code_source: "https://github.com/Merbou/VGG19_COVID19",
          techs: [
            { url: "https://www.python.org", icon: "/icon/python.png" },
            { url: "https://www.tensorflow.org", icon: "/icon/tensorflow.png" },
            { url: "https://www.vuejs.org", icon: "/icon/vue.png" },
          ],
          imgs: ["/img/projects/covid/0.png"],

          timeWork: 120,
          litreCoffee: 2.5,
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
    injectProject(project) {
      this.projectModel = project;
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

<style>
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
.card-footer-para {
  position: absolute;
  height: 10%;
  width: 80%;
  bottom: 15px;
  display: flex;
  color: #fff;
  justify-content: space-around;
}
.card-icon-footer,
.card-svg-footer {
  margin-top: 5px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}
.card-svg-footer {
  align-items: center;
}
.card-svg-footer {
  align-content: center;
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
.modal-content {
  background: linear-gradient(
    to bottom,
    rgb(58 24 192) 0%,
    rgb(227 154 101) 100%
  ) !important;
  color: #fdfdfd !important;
}
.modal-header,
.modal-footer {
  border-top: 0px !important;
  border-bottom: 0px !important;
}
footer#modal___BV_modal_footer_ {
  justify-content: flex-start !important;
}
.splide__list {
  max-width: 100% !important;
  max-height: 100% !important;
}
.splide__slide {
  max-width: 100% !important;
  max-height: 100% !important;
}
.img-slider {
  max-width: 100% !important;
  max-height: 100% !important;
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
img.img-tech {
  max-width: 100%;
  max-height: 100%;
  margin-left: 5px;
  margin-right: 5px;
}
.svg-card-para {
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