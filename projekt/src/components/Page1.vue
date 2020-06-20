<template>
  <div class="container">
    <h1 class="name">{{detail.name}}</h1>

    <h2 class="district">{{detail.district}}</h2>

    <div class="description">{{detail.description}}</div>

    <div v-html="detail.transport" class="transport"></div>

    <iframe :src="detail.map" width="640" height="480" class="map"></iframe>
  </div>
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
  },
  computed: {
    getRoute() {
      return document.getElementById(this.$route.params.id);
    }
  }
};
</script>
<style lang="css" scoped>
.description {
  padding: 0 100px;
}
.name {
  color: #783192;
}
.district {
  color: #59bcc8;
}

.description,
.name,
.district,
.transport {
  text-align: start;
  padding-left: 30px;
}
</style>