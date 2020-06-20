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
.name {
  background: -webkit-linear-gradient(left, #783192, #59bcc8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.district {
  color: #616a6b;
}
@media (max-width: 499px) {
  .name,
  .district,
  .description,
  .transport {
    padding-left: 50px;
    padding-right: 50px;
  }
  .transport {
    padding: 20px 0 20px 50px;
  }
}
@media (min-width: 500px) and (max-width: 799px) {
  .description {
    padding: 0 100px;
  }
  .name,
  .district,
  .description,
  .transport {
    padding-left: 100px;
    padding-right: 100px;
  }
  .transport {
    padding: 20px 0 20px 100px;
  }
}
@media (min-width: 800px) {
  .description {
    padding: 0 120px;
  }
  .name,
  .district,
  .description,
  .transport {
    padding-left: 120px;
    padding-right: 120px;
  }
  .transport {
    padding: 20px 0 20px 120px;
  }
}
</style>