<template>
  <section class="container-fluid">
    <div class="row footer-row">
      <div class="content-footer">
        <div class="col footer-col">
          <ul>
            <li>MOBILE: +213782057355</li>
            <li>Fix: 21344064123</li>
          </ul>
        </div>
        <div class="col footer-col">
          <ul class="followers">
            <li>
              <icon
                class="svg"
                fill="#06054b"
                name="stackoverflow"
                :to="'https://stackoverflow.com/users/9523354/merouane-boucenna'"
              />
            </li>
            <li>
              <icon
                class="svg"
                fill="#06054b"
                name="github"
                :to="'https://github.com/Merbou'"
              />
            </li>
            <li>
              <icon
                class="svg"
                fill="#06054b"
                name="linkedin"
                :to="'https://www.linkedin.com/in/merouane-boucenna'"
              />
            </li>
          </ul>
        </div>
        <div class="col footer-col">
          <ul>
            <li>merouaneboucennamb@gmail.com</li>
            <li>merouaneBoucenna@outlook.com</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="footer-footer">
        <span
          >{{ new Date().getFullYear() }} — Copyright © {{ name }}. All rights
          reserved</span
        >
      </div>
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
.footer-row {
  width: 100%;
}
.footer-col {
  display: flex;
  justify-content: center;
  align-items: center;
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

@media only screen and (max-width: 650px) {
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

@media only screen and (max-width: 505px) {
  .content-footer {
    display: block;
  }
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
</style>