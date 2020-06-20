<template>
  <div class="container">
    <div class="navbar">
      <img class="logo" src="../assets/rsz_cover.png" />
      <nav class="navigace">
        <router-link class="link" to="/homepage">Mapa</router-link>
        <router-link class="link" to="/trasa/:id">Seznam tras</router-link>
      </nav>
      <a
        class="weatherwidget-io"
        href="https://forecast7.com/cs/50d0814d44/prague/"
        data-label_1="Praha"
        data-label_2="Počasí"
        data-icons="Climacons Animated"
        data-days="3"
        data-highcolor="#783192"
        data-lowcolor="#59BCC8"
        data-cloudfill="#616a6b"
      >Praha Počasí</a>
    </div>
    <router-view />
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: "App"
};
!(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = "https://weatherwidget.io/js/widget.min.js";
    fjs.parentNode.insertBefore(js, fjs);
  }
})(document, "script", "weatherwidget-io-js");
</script>

<style lang="css">
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.logo {
  width: 350px;
  height: auto;
  margin-left: 0;
}

.link {
  color: #616a6b;
  text-decoration: none;
  padding-left: 20px;
  padding-right: 20px;
}

.navigace {
  align-self: center;
  margin-right: 50px;
}
.weatherwidget-io {
  width: 450px;
}
</style>

