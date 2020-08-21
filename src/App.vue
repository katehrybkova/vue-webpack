<template >
  <div>
    <div>
      <my-header></my-header>
      <statistic-grid  class="container pt-3"></statistic-grid>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/Header";
import StatisticGrid from "./components/StatisticGrid";

export default {
  components: { MyHeader, StatisticGrid }
};
</script>
