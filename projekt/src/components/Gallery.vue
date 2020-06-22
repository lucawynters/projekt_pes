<template>
  <hooper :infiniteScroll="true" :itemsToShow="3">
    <slide>
      <img
        class="slider"
        src="/assets/cibulka.jpg"
        title="Přírodní park Košíře-Motol"
      />
    </slide>
    <slide>
      <a href="/trasa/obora-hvezda">
        <img class="slider" src="/assets/obora.jpg" title="Obora Hvězda" />
      </a>
    </slide>
    <slide>
      <a href="/trasa/petrinske-sady">
        <img class="slider" src="/assets/petrin.jpg" title="Petřínské sady"
      /></a>
    </slide>
    <slide>
      <a href="/trasa/vinor-satalice">
        <img
          class="slider"
          src="/assets/vinorsatalice.jpg"
          title="Vinořský park - Satalická bažantnice"
      /></a>
    </slide>
    <slide>
      <a href="/trasa/xaverovsky-haj">
        <img class="slider" src="/assets/xaverov.jpg" title="Xaverovský háj" />
      </a>
    </slide>
    <slide>
      <a href="/trasa/repy-motol">
        <img
          class="slider"
          src="/assets/repy.jpg"
          title="Lesopark Řepy-Motol"
        />
      </a>
    </slide>
  </hooper>
</template>
<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
export default {
  name: "App",
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 2,
        centerMode: true,
        breakpoints: {
          800: {
            centerMode: false,
            itemsToShow: 3,
          },
          1000: {
            itemsToShow: 6,
            pagination: "fraction",
          },
        },
      },
    };
  },
};
</script>
<style scoped>
.slider {
  width: 100%;
  height: auto;
  padding: 0 10px;
}
.hooper {
  height: 45vw;
}
</style>
