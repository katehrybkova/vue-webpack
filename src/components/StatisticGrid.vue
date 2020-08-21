<template>
  <div>
    <b-table
      striped
      hover
      :fields="fields"
      :items="items"
      sort-by="comments"
      sort-desc
    ></b-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      items: [],
      fields: [
        {
          key: "text",
          sortable: true,
        },
       
        {
          key: "comments",
          sortable: true,
        },
        {
          key: "likes",
          sortable: true,
        },
      ],
    };
  },
  mounted() {
    axios.get("http://localhost:3000/api/news/").then((response) => {
      this.items = response.data;
    });
  },
};
</script>