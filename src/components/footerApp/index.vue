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
      <span>made with love</span>
    </div>
  </section>
</template>

<script>
import icon from "../icons";
export default {
  components: {
    icon
  },
  name: "footerApp"
};
</script>

<style scoped>
section {
  height: 15vh;
  width: 100%;
  background: #ffffff;
  display: flex;

  flex-direction: column;
}
.content-footer {
  display: flex;
  justify-content: space-around;
  width: 100%;
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
li {
  color: #06054b;
}
</style>