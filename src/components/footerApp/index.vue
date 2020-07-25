<template>
  <section>
    <div class="content-footer">
      <ul>
        <li>MOBILE: 0555069674</li>
        <li>Fix: 21344064123</li>
      </ul>
      <ul class="followers">
        <li>
          <icon class="svg" fill="#06054b" name="facebook" />
        </li>
        <li>
          <icon class="svg" fill="#06054b" name="twitter" />
        </li>
        <li>
          <icon class="svg" fill="#06054b" name="github" />
        </li>
      </ul>
      <ul>
        <li>merouaneBoucenna@outlook.com</li>
        <li>imarwanee@gmail.com</li>
      </ul>
    </div>
    <div class="footer-footer">
      <span>{{ new Date().getFullYear() }} — Copyright © {{name}}. All rights reserved</span>
    </div>
  </section>
</template>

<script>
import icon from "../icons";
export default {
  components: {
    icon,
  },
  name: "footerApp",
  data() {
    return {
      name: "MB Protfolio",
    };
  },
};
</script>

<style scoped>
section {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.content-footer {
  z-index: 55;
  display: flex;
  mix-blend-mode: screen;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  mix-blend-mode: screen;
  background: #fff;
  height: 80%;
}

.footer-footer {
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #06054b;
}

.footer-footer span {
  color: #ffffff;
}

.followers {
  display: flex;
}
.svg {
  width: 50px;
  margin: 7px;
}
ul {
  padding: 0px;
}
.content-footer ul li {
  color: #06054b;
  font-weight: 900;
  font-size: 25px;
}

@media only screen and (max-width: 950px) {
  .content-footer ul li {
    font-size: 23px;
  }
}
@media only screen and (max-width: 750px) {
  .content-footer ul li {
    font-size: 20px;
  }
  .svg {
    width: 45px;
  }
  .footer-footer {
    font-size: 11px;
  }
}

@media only screen and (max-width: 610px) {
  .content-footer {
    justify-content: center;
  }
  .content-footer ul li {
    font-size: 15px;
  }
  .svg {
    width: 35px;
  }
}

@media only screen and (max-width: 450px) {
  .content-footer ul li {
    font-size: 13px;
  }
  .svg {
    width: 28px;
  }
}

@media only screen and (max-width: 400px) {
  .content-footer ul li {
    font-size: 13px;
  }
  .svg {
    width: 25px;
  }
}
</style>