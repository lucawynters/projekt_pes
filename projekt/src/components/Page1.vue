<template>
  <h1>{{detail.name}} {{detail.description}}</h1>
</template>

<script>
import { data } from "../data.js";

export default {
  name: "Page1",
  data() {
    return {
      detail:
        data[
          data.findIndex(item => {
            return item.id === this.$route.params.id;
          })
        ]
    };
  }
  // computed: {
  //   getRoute() {
  //     return document.getElementById(this.$route.params.id);
  //   }
  // }
};
</script>