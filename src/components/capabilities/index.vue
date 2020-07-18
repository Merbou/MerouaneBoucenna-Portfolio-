<template>
  <section>
    <div class="container">
      <div class="total_points">
        <ul>
          <li>
            <span>Rank: #1</span>
          </li>
          <li>
            <span>Name: Merouane</span>
          </li>
          <li>
            <span>Level: Mid level</span>
          </li>
          <li>
            <span>Total score:</span>

            <pixel-bar :play="capabilities" :perc="sumScore" :maxValue="sumScore" :duration="8">
              <template v-slot:default="{count}">
                <small>{{count}}</small>
              </template>
            </pixel-bar>
          </li>
          <li>
            <span>Top score:</span>
            <pixel-bar :play="capabilities" :perc="maxScore" :maxValue="maxScore" :duration="5">
              <template v-slot:default="{count}">
                <small>{{count}}</small>
              </template>
            </pixel-bar>
          </li>
        </ul>
      </div>
      <div :class="`capabilitie_points_${i+1}`" :key="i" v-for="(column,i) in columns">
        <ul>
          <li :key="item.name " v-for="item in column">
            <span>{{item.name}}:</span>
            <pixel-bar :play="capabilities" :perc="item.score">
              <template v-slot:default="{count}">
                <small>{{count}}/2000</small>
              </template>
            </pixel-bar>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import pixelBar from "./pixelBar";
let score_counter = new Audio("/sound/score_counter.mp3");
let end_score_counter = new Audio("/sound/end_score_counter.mp3");
export default {
  components: {
    pixelBar
  },
  props: {
    capabilities: {
      type: Boolean
    }
  },
  data() {
    return {
      columns: [
        [
          { name: "HTML 5", score: 1800 },
          { name: "CSS", score: 1600 },
          { name: "PHP", score: 1700 },
          { name: "Laravel", score: 1800 },
          { name: "Javascript", score: 1700 },
          { name: "Vuejs", score: 1900 },
          { name: "sql", score: 1700 },
          { name: "MYSQL", score: 1700 },
          { name: "NoSql", score: 1100 },
          { name: "MONGODB", score: 1100 }
        ],
        [
          { name: "PHPunit", score: 1100 },
          { name: "Jest", score: 1100 },
          { name: "Api", score: 1900 },
          { name: "WebSocekt", score: 1700 },
          { name: "SEO", score: 1400 },
          { name: "Vuex", score: 1900 },
          { name: "Vue-router", score: 1900 },
          { name: "Vuetify", score: 1900 },
          { name: "webpack", score: 1500 },
          { name: "babel", score: 1100 }
        ],
        [
          { name: "SOLID principles", score: 1900 },
          { name: "Modeling Tools", score: 1500 },
          { name: "Project management", score: 1400 },
          { name: "Problem solving", score: 2000 },
          { name: "Testing", score: 1700 },
          { name: "Merise", score: 1700 },
          { name: "UML", score: 1700 }
        ]
      ]
    };
  },
  computed: {
    maxScore() {
      return Math.max(
        ...this.columns.map(_c => Math.max(..._c.map(e => parseInt(e.score))))
      );
    },
    sumScore() {
      return this.columns.reduce(
        (_acc_c, _cur_c) =>
          _acc_c + _cur_c.reduce((_acc, _cur) => _acc + _cur.score, 0),
        0
      );
    }
  },
  methods: {
    playScoreCounter(timer) {
      setTimeout(() => {
        score_counter.play();
        setTimeout(() => {
          score_counter.pause();
          score_counter.currentTime = 0;
          end_score_counter.play();
        }, parseInt(timer));
      }, 0);
    }
  },
  watch: {
    capabilities() {
      this.playScoreCounter(8000);
    }
  }
};
</script>

<style>
ul {
  padding: 30px;
}
li {
  padding-top: 7px;
  color: #ffffff;
  text-decoration: none;
  list-style-type: none;
  font-size: 25px;
  transition: 2s;
}
li span {
  transition: 2s;
}
section {
  overflow: hidden;
  width: 100%;
  background: -webkit-linear-gradient(
    to bottom,
    rgb(6, 5, 75),
    rgb(53, 3, 186)
  );
  z-index: 55;
  background: linear-gradient(to bottom, rgb(6, 5, 75), rgb(53, 3, 186));
  display: flex;
  justify-content: space-around;
}
.container {
  margin: 50px;
  position: relative;
  max-height: 1000px;
  width: 88%;
  z-index: 55;
  display: flex;
  justify-content: space-between;
  transform: perspective(1000px);
  transition: 1s;
}
#capabilities:hover .container {
  transform: perspective(1000px) rotateX(11deg) rotateY(0deg) scale3d(1, 1, 1);
}
  #capabilities:hover li {
  transform: scaleY(1.2) translateY(-25px);
} 

#capabilities:hover li span {
  box-shadow: 2px 16px 4px rgba(0, 0, 0, 0.3);
} 
.container::before {
  content: "";
  height: 100%;
  width: 100%;
  display: block;
  box-sizing: border-box;
  z-index: 1;
  position: absolute;
  border: 2px solid transparent;
  border-radius: 20px;
  border-image: linear-gradient(
    to right,
    rgb(227, 154, 101) 0%,
    rgb(233, 96, 142) 30%
  );
  border-image-slice: 1;
}

.total_points {
  height: 100%;
  width: 80%;
  z-index: 2;
  border-right: 2px solid rgb(231, 118, 128);
  display: flex;
  flex-direction: column;
}
.total_points li {
  font-size: 24px;
}
.capabilitie_points_1 {
  height: 100%;
  width: 90%;
  z-index: 2;
  border-right: 2px solid rgb(233, 96, 142);
  display: flex;
  flex-direction: column;
}
.capabilitie_points_1 li {
  font-size: 24px;
}
.capabilitie_points_2,
.capabilitie_points_3 {
  width: 100%;
  z-index: 2;
  height: 100%;
  border-right: 2px solid rgb(233, 96, 142);
  display: flex;
  flex-direction: column;
}
small {
  font-size: 15px;
}
</style>