<template>
  <div>
    <iframe
      src="https://www.google.com/maps/d/u/0/embed?mid=1EgEwwP7VEbi22zyufEuLC7sFEWcsrhOR"
      width="640"
      height="480"
    ></iframe>
    <div class="list-item" v-for="track in tracks" :key="track.id">
      <router-link class="tracks-list" :to="`/trasa/${track.id}`">{{track.name}}</router-link>
    </div>
  </div>
</template>

<script>
import { data } from "../data.js";

export default {
  data() {
    return {
      tracks: data
    };
  }
};
</script>

<style lang="css" scoped>
.tracks-list {
  text-decoration: none;
}
@media (max-width: 499px) {
  .tracks-list {
    padding: 20px;
  }
}

@media (min-width: 500px) and (max-width: 799px) {
}

@media (min-width: 800px) {
}
</style>
