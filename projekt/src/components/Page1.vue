<template>
  <div class="container">
    <h1 class="name">{{detail.name}}</h1>

    <h2 class="district">{{detail.district}}</h2>

    <div class="description">{{detail.description}}</div>

    <div class="transport">{{detail.transport}}</div>

    <iframe
      src="https://www.google.com/maps/d/embed?mid=1RHCDdyilXzVmtSt8QGm0EaZWgh50DFWf"
      width="640"
      height="480"
    ></iframe>
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
<style lang="css">
.description {
  max-width: 260px;
}
.name {
  color: #783192;
}
.district {
  color: #59bcc8;
}
</style>