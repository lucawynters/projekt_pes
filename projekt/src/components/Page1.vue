<template>
  <h1>sadfsdsd</h1>
</template>

<script>
import { routes } from ".projekt/src/data.js ";

export default {
  name: "Routes",
  data() {
    return { routes };
  },
  computed: {
    getRoute() {
      return document.getElementById(this.$route.params.id);
    }
  }
};
</script>