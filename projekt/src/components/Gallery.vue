<template>
  <hooper :infiniteScroll="true" :itemsToShow="3">
    <slide>
      <img class="slider" src="/assets/cibulka.jpg" />
    </slide>
    <slide>
      <img class="slider" src="/assets/obora.jpg" />
    </slide>
    <slide>
      <img class="slider" src="/assets/klanovice.jpg" />
    </slide>
    <slide>
      <img class="slider" src="/assets/vinorsatalice.jpg" />
    </slide>
    <slide>
      <img class="slider" src="/assets/xaverov.jpg" />
    </slide>
    <slide>
      <img class="slider" src="/assets/repy.jpg" />
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
<<<<<<< HEAD

=======
>>>>>>> d4f9e3b05c5002e61d4240382979c7fdccde3f10
.hooper {
  height: 45vw;
}
</style>
