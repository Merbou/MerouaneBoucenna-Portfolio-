<template>
  <section>
    <div class="container" :class="{'container-scrolled':capabilities}">
      <div :class="`column_points_${i+1}`" :key="i" v-for="(column,i) in full_columns()">
        <ul>
          <li :key="item.title" v-for="item in column" :class="{'li-scrolled':capabilities}">
            <span :class="{'span-scrolled':capabilities}">{{item.title}}: {{item.name}}</span>

            <template v-if="item.value||item.score">
              <pixel-bar v-if="item.score" :play="capabilities" :value="item.score">
                <template v-slot:default="{count}">
                  <small>{{count}}/2000</small>
                </template>
              </pixel-bar>
              <pixel-bar
                v-if="item.value"
                :play="capabilities"
                :value="item.value()"
                :maxValue="item.value()"
                :duration="item.duration"
              >
                <template v-slot:default="{count}">
                  <small>{{count}}</small>
                </template>
              </pixel-bar>
            </template>
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
          { title: "HTML 5", score: 1800 },
          { title: "CSS", score: 1600 },
          { title: "PHP", score: 1700 },
          { title: "Laravel", score: 1800 },
          { title: "Javascript", score: 1700 },
          { title: "Vuejs", score: 1900 },
          { title: "sql", score: 1700 },
          { title: "MYSQL", score: 1700 },
          { title: "NoSql", score: 1100 },
          { title: "MONGODB", score: 1100 }
        ],
        [
          { title: "PHPunit", score: 1100 },
          { title: "Jest", score: 1100 },
          { title: "Api", score: 1900 },
          { title: "WebSocekt", score: 1700 },
          { title: "SEO", score: 1400 },
          { title: "Vuex", score: 1900 },
          { title: "Vue-router", score: 1900 },
          { title: "Vuetify", score: 1900 },
          { title: "webpack", score: 1500 },
          { title: "babel", score: 1100 }
        ],
        [
          { title: "SOLID principles", score: 1900 },
          { title: "Modeling Tools", score: 1500 },
          { title: "Project management", score: 1400 },
          { title: "Problem solving", score: 2000 },
          { title: "Testing", score: 1700 },
          { title: "Merise", score: 1700 },
          { title: "UML", score: 1700 }
        ]
      ],
      abst: [
        {
          title: "Rank",
          name: "#1"
        },
        {
          title: "Name",
          name: "Merouane"
        },
        {
          title: "Level",
          name: "Mid level"
        },
        {
          title: "Total score",
          value: this.sumScore,
          duration: 6
        },
        {
          title: "Top score",
          value: this.maxScore,
          duration: 5
        }
      ],
      maxScoreValue: 0,
      sumScoreValue: 0
    };
  },

  methods: {
    full_columns() {
      return [this.abst, ...this.columns];
    },
    maxScore() {
      if (!this.maxScoreValue)
        this.maxScoreValue = Math.max(
          ...this.columns.map(_c => Math.max(..._c.map(e => parseInt(e.score))))
        );
      return this.maxScoreValue;
    },
    sumScore() {
      if (!this.sumScoreValue)
        this.sumScoreValue = this.columns.reduce(
          (_acc_c, _cur_c) =>
            _acc_c + _cur_c.reduce((_acc, _cur) => _acc + _cur.score, 0),
          0
        );
      return this.sumScoreValue;
    },
    playScoreCounter(timer) {
      score_counter.play();
      setTimeout(() => {
        score_counter.pause();
        score_counter.currentTime = 0;
        end_score_counter.play();
      }, parseInt(timer));
    }
  },

  watch: {
    capabilities() {
      if (!this.sumScoreValue) this.playScoreCounter(6000);
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
.container-scrolled {
  transform: perspective(1000px) rotateX(11deg) rotateY(0deg) scale3d(1, 1, 1);
}
.li-scrolled {
  transform: scaleY(1.2) translateY(-25px);
}

.span-scrolled {
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

.column_points_1 {
  height: 100%;
  width: 80%;
  z-index: 2;
  border-right: 2px solid rgb(231, 118, 128);
  display: flex;
  flex-direction: column;
}
.column_points_1 li {
  font-size: 24px;
}
.column_points_2 {
  height: 100%;
  width: 90%;
  z-index: 2;
  border-right: 2px solid rgb(233, 96, 142);
  display: flex;
  flex-direction: column;
}
.column_points_2 li {
  font-size: 24px;
}
.column_points_3,
.column_points_4 {
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