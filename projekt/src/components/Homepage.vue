<template>
  <div class="container">
    <div class="header">
      <h1>Prahou se psem</h1>
      <p class="about">
        Přijměte naše pozvání na toulky nejkrásnějšími pražskými luhy a háji.
        Prozradíme vám tajné tipy na ty nejlepší trasy procházek a přidáme pár
        dobrých rad k tomu.
      </p>
      <a class="button" href="#map" v-smooth-scroll>Hurá na mapu</a>
    </div>
    <div class="mapa">
      <div id="map" class="main">
        <h2>Najděte si park na mapě</h2>
        <iframe
          class="frame"
          src="https://www.google.com/maps/d/u/0/embed?mid=1EgEwwP7VEbi22zyufEuLC7sFEWcsrhOR"
          width="640"
          height="480"
        ></iframe>
        <h2 id="seznam">Anebo si vyberte ze seznamu</h2>
        <div class="wrapper">
          <div class="list-item" v-for="track in tracks" :key="track.id">
            <router-link class="tracks-list" :to="`/trasa/${track.id}`">
              {{ track.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="seznam">
      <h2>Naši testeři doporučují</h2>
      <Gallery />
    </div>
  </div>
</template>

<script>
import { data } from "../data.js";
import Gallery from "./Gallery";

export default {
  components: {
    Gallery,
  },
  data() {
    return {
      tracks: data,
    };
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    270deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(89, 188, 200, 1) 0%,
    rgba(120, 49, 146, 1) 100%
  );

  justify-content: flex-end;
  padding: 50px;
}
.button {
  display: block;
  width: 200px;
  height: 50px;
  background: white;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  color: black;
  font-weight: bold;
  line-height: 25px;
  align-self: center;
  text-decoration: none;
}
.button:hover {
  color: rgba(120, 49, 146, 1);
}
h1 {
  color: white;
  font-size: 60px;
  align-self: center;
  text-align: center;
}
h2 {
  align-self: center;
  text-align: center;
  padding-top: 20px;
}
.about {
  color: white;
  margin-bottom: 100px;
  max-width: 450px;
  align-self: center;
  text-align: center;
  font-weight: lighter;
}

.mapa {
  display: flex;
  flex-direction: column;
}

.main {
  display: flex;
  flex-direction: column;
}

.seznam {
  display: flex;
  flex-direction: column;
  height: calc(45vw + 4em);
}
.tracks-list {
  text-decoration: none;
}
.list-item:hover {
  background-color: rgba(120, 49, 146, 1);
}
.list-item {
  padding: 7px 15px;
  width: 200px;
  margin: 8px 3px;
  border-radius: 4px;
  background-color: #59bcc8;
  text-align: center;
  height: 51px;
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 50px 30px 50px;
}

.list-item a {
  color: white;
  text-decoration: none;
  padding-top: 10px;
}

.frame {
  margin-left: auto;
  margin-right: auto;
  max-width: 90vw;
}

@media (max-width: 499px) {
  .tracks-list {
    padding: 20px;
  }
  h1 {
    font-size: 30px;
  }
}

@media (min-width: 500px) and (max-width: 799px) {
  .about {
    font-size: 20px;
  }
  h1 {
    font-size: 30px;
  }
}

@media (min-width: 800px) {
  .about {
    font-size: 25px;
    font-weight: 100;
  }
}
</style>
