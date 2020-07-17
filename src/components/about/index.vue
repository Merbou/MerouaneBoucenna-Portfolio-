<template>
  <section>
    <div class="cub-computer">
      <div data-depth="0.2" class="computer_2">
        <img src="/img/computer_2.png" height="600" alt="computer_2" />
        <span class="computer-shadow"></span>
      </div>

      <div data-depth="0.5" class="cub">
        <img src="/img/cub.png" height="300" alt="cub" />
        <span class="cub-shadow"></span>
      </div>
    </div>
    <aside class="biography">
      <p>
        BOUCENNA MEROUANE was born on march 3,1996 in Algiers, Algeria. Raised in Bab El Oued. He received
        baccalaureate (scientist) from Omar ibn el Khattab high school in 2016, License degree (information systems
        and software engineer) from University of Algiers 2019, He is studying at Houari Boumediene University of
        Science and Technology to receive master degree (Bioinformatics).
      </p>
      <p>
        Merouane first became interested in software development in the first year of university where he discovered
        the software development, he loved that so much that he decided to be a software engineer, since then he
        stay awake for learning and get more experience form anything and anywhere that related with software
        development (friends, books, events, blogs, documentaries, series)
      </p>
      <p>
        Merouane is now a web developer with extensive experience, large knowledge of languages of web
        development and management skills, like working in collaboration team.
      </p>
    </aside>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  overflow: hidden;
  width: 100%;
  /* height: 100vh;  */
  padding-top: 100px;
  padding-bottom: 100px;
  background: -webkit-linear-gradient(
    to bottom,
    rgb(53, 3, 186) 5%,
    rgb(6, 5, 75) 75%
  );
  background: linear-gradient(to bottom, rgb(53, 3, 186) 5%, rgb(6, 5, 75) 75%);
  display: flex;
  justify-content: space-around;
}

.biography {
  padding: 100px;
  width: 60%;
  z-index: 5;
}
.biography p {
  background: linear-gradient(to right, #fdfbfb, #ebedee 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: justify;
}
.cub-computer {
  width: 100%;
  z-index: 5;
  transition: 1s;
  position: relative;
  max-height: 500px;
}
.cub-computer .computer_2 .img {
  max-height: 600px;
}
.cub-computer .cub .img {
  max-height: 300px;
}
.cub-computer::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  height: 500px;
  width: 90%;
  z-index: -1;
  border: 5px solid transparent;
  border-radius: 20px;
  border-image: linear-gradient(
    to right,
    rgb(227, 154, 101) 0%,
    rgb(233, 96, 142) 30%
  );
  border-image-slice: 1;
}
section:hover .cub-computer {
  background-position: -10% 90%;
  transform: rotateY(25deg) rotateZ(15deg) translateZ(20px);
}
.computer_2 {
  position: absolute;
  z-index: 50;
  margin: 50px;
  transition: 1s;
}
section:hover .cub-computer .computer_2 {
  transform: translateX(-10px) translateY(-25px) rotate(-20deg) scale(1.1);
}
.cub {
  position: absolute;
  z-index: 10;
  transition: 1s;
}
section:hover .cub-computer .cub {
  transform: translateX(-100px) translateY(100px) rotate(-15deg) scale(1.1);
}
.computer-shadow {
  position: absolute;
  bottom: 55px;
  height: 228px;
  width: 300px;
  right: 125px;
  z-index: -1;
  border-radius: 10px;
  transform: rotateX(deg);
  transform: rotate(52deg) skew(-9deg, -22deg);
  perspective: 400;
  background: rgba(0, 0, 0, 0.2);
  transition: 1s;
}
section:hover .cub-computer .computer-shadow {
  transform: translateY(30px) translateZ(500px) rotate(52deg)
    skew(-9deg, -22deg) scale(0.8);
}
.cub-shadow {
  position: absolute;
  bottom: 0px;
  height: 50px;
  width: 100px;
  right: 0px;
  z-index: -1;
  border-radius: 100%;
  background: rgba(0, 0, 0, 0.2);
  transition: 1s;
}
section:hover .cub-computer .cub-shadow {
  transform: translateY(30px) translateZ(500px) scale(0.8);
}
</style>