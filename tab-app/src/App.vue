<template >
  <div class="container">
    <div class="tabs">
      <div v-bind:class="[isListActive ? 'active' : '']" @click="isListActive = true">List</div>
      <div v-bind:class="[isListActive ? '' : 'active']" @click="isListActive = false">Picture</div>
    </div>
    <div class="elements">
      <div v-if="isListActive">
        <list></list>
      </div>
      <div v-else>
        <pic></pic>
      </div>
      <component v-bind:is="list"></component>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isListActive: true
    };
  }
};
</script>

<style scoped>
.tabs {
  display: flex;
  justify-content: space-around;
  padding: 0;
  border-bottom: 1px solid burlywood;
}
.tabs div {
  width: 50%;
  padding: 10px;
  cursor: pointer;
}
.container {
  text-align: center;
  border: 1px solid burlywood;
  width: 500px;
  margin: auto;
  font-family: Arial, Helvetica, sans-serif;
}
.active {
  background-color: burlywood;
}
.elements {
  padding: 10px 25px;
}
</style>