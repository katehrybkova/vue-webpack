<template>
  <div>
    <ul>
      <li v-for="item in movies">
        <p>{{item.title}}</p>
        <p>{{item.overview}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return { movies: [] };
  },
  created() {
    this.fetchData();
  },

  methods: {
    fetchData: function() {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/now_playing?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru-RU&page=1"
        )
        .then(response => {
          this.movies = response.data.results;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style>
ul {
  list-style: none;
}
</style>
