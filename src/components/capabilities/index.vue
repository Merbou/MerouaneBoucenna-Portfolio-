<template>
  <section id="capabilities">
    <div class="container">
      <div class="total_points">
        <ul>
          <li>Total score</li>
          <li>Top score</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="capabilitie_points_1"></div>
      <div class="capabilitie_points_2"></div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
#capabilities {
  overflow: hidden;
  width: 100%;
  height: 110vh;
  padding-top: 100px;
  background: -webkit-linear-gradient(
    to bottom,
    rgb(6, 5, 75),
    rgb(53, 3, 186)
  );
  background: linear-gradient(to bottom, rgb(6, 5, 75), rgb(53, 3, 186));
  display: flex;
  justify-content: space-around;
}
.container {
  margin: 50px;
  position: relative;
  max-height: 1000px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.container::before {
  content: "";
  height: 100%;
  width: 100%;
  display: block;
  box-sizing: border-box;
  z-index: 5;
  position: absolute;
  border: 5px solid transparent;
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
  width: 70%;
  z-index: 2;
  border: 3px solid transparent;
  border-image: linear-gradient(
    to right,
    rgb(227, 154, 101) 0%,
    rgb(233, 96, 142) 30%
  );
  border-image-slice: 1;

  display: flex;
  flex-direction: column;
}
.capabilitie_points_1 {
  height: 100%;
  width: 100%;
  z-index: 2;
  border: 3px solid transparent;
  border-image: linear-gradient(
    to right,
    rgb(227, 154, 101) 0%,
    rgb(233, 96, 142) 30%
  );
  border-image-slice: 1;

  display: flex;
  flex-direction: column;
}
.capabilitie_points_2 {
  width: 100%;
  z-index: 2;
  height: 100%;
  border: 3px solid transparent;
  border-image: linear-gradient(
    to right,
    rgb(227, 154, 101) 0%,
    rgb(233, 96, 142) 30%
  );
  border-image-slice: 1;

  display: flex;
  flex-direction: column;
}
ul {
  padding: 50px;
}
li {
  padding-top: 10px;
  color: #ffffff;
  text-decoration: none;
  list-style-type: none;
  font-size: 30px;
}
</style>