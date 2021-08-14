<template>
  <section class="jumbotron jumbotron-fluid">
    <div class="container-fluid">
      <div class="row">
        <div class="title-about">
          <h1>About</h1>
        </div>
      </div>
      <div class="row">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 biography-content">
              <aside class="biography">
                <p>
                  BOUCENNA MEROUANE was born on march 5,1996 in Algiers,
                  Algeria. he graduated from the University of Algiers with a
                  bachelor's degree in information systems and software engineer
                  in 2019, He studied at the University of Science and
                  Technology Houari Boumediene to receive a master's degree in
                  Bioinformatics in 2021
                </p>
                <p>
                  Merouane first became interested in software development
                  during his first year of college when he discovered it and
                  loved it so much that he decided to become a software
                  engineer.Since then, he stays up at night to learn and gain
                  more experience from anything and anywhere related to software
                  development (Friends, books, events, blogs, documentaries,
                  series).
                </p>
                <p>
                  Merouane is now a full-stack web developer with a computer
                  science background and extensive experience, large knowledge
                  of languages of web development, likes working in a
                  collaboration team.
                </p>
              </aside>
            </div>
            <div class="col-md-6 cub-computer-content">
              <div
                class="cub-computer"
                :class="{ 'cub-computer-scrolled': about }"
              >
                <div
                  class="computer_2"
                  :class="{ 'computer_2-scrolled': about }"
                >
                  <img src="img/computer_2.png" alt="computer_2" />
                  <span
                    class="computer-shadow"
                    :class="{ 'computer-shadow-scrolled': about }"
                  ></span>
                </div>

                <div class="cub" :class="{ 'cub-scrolled': about }">
                  <img src="img/cub.png" alt="cub" />
                  <span
                    class="cub-shadow"
                    :class="{ 'cub-shadow-scrolled': about }"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    about: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
section {
  width: 100%;
  background: -webkit-linear-gradient(
    to bottom,
    rgb(53, 3, 186) 5%,
    rgb(6, 5, 75) 75%
  );
  background: linear-gradient(to bottom, rgb(53, 3, 186) 5%, rgb(6, 5, 75) 75%);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
.title-about {
  display: flex;
  justify-content: center;
}
.title-about h1 {
  color: #ffffff;
  font-size: 7vw;
  z-index: 55;
}
.content-about {
  padding-top: 30px;
  display: flex;
  justify-content: space-around;
}
.biography-content {
  z-index: 10;
}
.biography p {
  background: linear-gradient(to right, #fdfbfb, #ebedee 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: justify;
  font-size: 1.75vw;
}

.cub-computer-content {
  display: flex;
  justify-content: center;
  padding-top: 15px;
}
.cub-computer {
  width: 80%;
  z-index: 5;
  transition: 1s;
  position: relative;
  transform: perspective(400px);
}
.cub-computer::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  height: 70%;
  width: 90%;
  z-index: -1;
  border: 5px solid transparent;
  border-radius: 20px;
  -o-border-image: linear-gradient(
    to right,
    rgb(227, 154, 101) 0%,
    rgb(233, 96, 142) 30%
  );
  border-image: linear-gradient(
    to right,
    rgb(227, 154, 101) 0%,
    rgb(233, 96, 142) 30%
  );
  border-image-slice: 1;
}

.computer_2 img {
  width: 100%;
  height: auto;
}
.computer_2 {
  position: relative;
  z-index: 50;
  transition: 1s;
}
.cub img {
  height: auto;
  width: 20%;
}
.cub {
  position: absolute;
  top: -70px;
  left: 70px;
  z-index: 60;
  transition: 1s;
}
.computer-shadow {
  position: absolute;
  bottom: 0px;
  height: 228px;
  height: 50%;
  left: 60px;
  width: 60%;
  z-index: -1;
  border-radius: 10px;
  transform: rotateX(deg);
  transform: rotate(52deg) skew(-9deg, -22deg);
  perspective: 400;
  background: rgba(0, 0, 0, 0.2);
  transition: 1s;
}

.cub-shadow {
  position: absolute;
  bottom: 0px;
  height: 20%;
  width: 20%;
  left: 0px;
  z-index: -1;
  border-radius: 100%;
  background: rgba(0, 0, 0, 0.2);
  transition: 1s;
}

.cub-computer-scrolled {
  background-position: -10% 90%;
  transform: rotateY(25deg) rotateZ(15deg) translateZ(20px);
}
.computer_2-scrolled {
  transform: translateX(-10px) translateY(-25px) rotate(-20deg) scale(1.1);
}
.cub-scrolled {
  transform: translateX(-100px) translateY(100px) rotate(-15deg) scale(1.1);
}
.computer-shadow-scrolled {
  transform: translateY(30px) translateZ(500px) rotate(52deg)
    skew(-9deg, -22deg) scale(0.8);
}
.cub-shadow-scrolled {
  transform: translateY(30px) translateZ(500px) scale(0.8);
}

@media only screen and (max-width: 750px) {
  .content-about {
    padding-top: 0px;
    flex-direction: column;
    align-items: center;
    height: 90%;
  }
  .biography {
    width: 100%;
    padding: 0px;
  }

  .biography p {
    font-size: 2.5vw;
  }
  .cub-computer {
    width: 50%;
  }
}
@media only screen and (max-width: 600px) {
  .title-about h1 {
    font-size: 10vw;
  }
  .biography p {
    font-size: 3vw;
  }
}
@media only screen and (max-width: 460px) {
  .title-about h1 {
    font-size: 15vw;
  }
  .biography p {
    font-size: 3.5vw;
  }
}
@media only screen and (max-width: 350px) {
  .biography p {
    font-size: 4.2vw;
  }
  .cub-computer {
    width: 66%;
  }
}
</style>