<template>
  <header class="header">
    <div>
      <p class="font-weight-bold">News Statistic</p>
    </div>
    <div>
      <img :src="imgSrc" alt="image" class="img-circle" />
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: require("../assets/images/menu.svg"),
    };
  },
};
</script>

<style>
.header {
  background-color: #77c1bb;
  margin-bottom: 25px;
  padding: 15px 25px;
  display: flex;
  justify-content: space-between;
  position: relative;
}

.header p {
  color: #372c48;
  font-size: 21px;
  margin: 0;
}
</style>