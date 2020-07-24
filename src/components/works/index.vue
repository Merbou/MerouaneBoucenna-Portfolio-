<template>
  <section>
    <div class="title-works">
      <h1>My works</h1>
    </div>
    <div class="content-works">
      <div
        class="card"
        data-tilt
        data-tilt-max="10"
        data-tilt-speed="500"
        data-tilt-perspective="1000"
        v-for="projet in projets"
        :key="projet.title"
      >
        <div class="card-title">
          <span>{{projet.title}}</span>
        </div>
        <div class="card-content">
          <div class="card-img">
            <img :src="projet.img" alt srcset />
          </div>
          <span>{{projet.description}}</span>
        </div>
        <div class="card-footer">
          <div class="card-footer-content">
            <span>{{projet.timeWork}}hrs</span>
            <icon class="svg" name="clock" fill="#fff" />
            <span>{{projet.litreCoffee}}L</span>
            <icon class="svg" name="coffee" fill="#fff" />
          </div>
        </div>
      </div>
    </div>

    <div class="footer-scetion">
      <span>{{animatedCountTimeWork}}hrs</span>
      <icon class="svg-footer-section" name="clock" fill="#fff" />
      <span>{{animatedCountLitreCoffee}}L</span>
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
          title: "Vus 1",
          description: "Full init app for develepoment a platforms",
          img: "/img/projet_1.png",
          timeWork: 225,
          litreCoffee: 150,
        },
        {
          title: "Vus 2",
          description: "Full init app for develepoment a platforms",
          img: "/img/projet_1.png",
          timeWork: 225,
          litreCoffee: 150,
        },
        {
          title: "Vus 3",
          description: "Full init app for develepoment a platforms",
          img: "/img/projet_1.png",
          timeWork: 225,
          litreCoffee: 150,
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
      return this.countLitre.toFixed(0);
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
.content-works {
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.card {
  position: relative;
  width: 25%;
  z-index: 55;
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
  margin-top: 14px;
}
.svg {
  z-index: 55;
  width: 30px;
  height: 30px;
  margin: 7px;
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

@media only screen and (max-width: 1010px) {
  .card {
    width: 32%;
  }
  .svg-footer-section {
    width: 8vw;
    height: 8vw;
  }
}

@media only screen and (max-width: 710px) {
  .card-title span {
    font-size: 20px;
  }

  .card-content span {
    font-size: 12px;
  }
  .card-footer-content span {
    margin-top: 10px;
    font-size: 13px;
  }
  .svg {
    width: 22px;
    height: 22px;
    margin: 4px;
  }
  .content-works {
    flex-wrap: wrap;
  }
  .card {
    width: 34%;
    margin: 5px;
    height: 50%;
  }

  .svg-footer-section {
    width: 10vw;
    height: 10vw;
  }
}
@media only screen and (max-width: 580px) {
  .card {
    width: 45%;
    margin: 5px;
    height: 50%;
  }
  .footer-scetion span {
    font-size: 6vw;
  }
}
</style>