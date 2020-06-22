<template>
  <div class="container">
    <header class="navbar">
      <div class="first-part">
        <a href="/"> <img class="logo" src="/assets/rsz_cover.png" /> </a>
        <img class="logo2" src="/assets/favicon.png" />

        <nav class="navigace">
          <a href="/#map" v-smooth-scroll>Mapa</a>
          <a href="/#seznam" v-smooth-scroll>Seznam tras</a>
        </nav>
      </div>
      <div class="second-part">
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
          >Praha Počasí</a
        >
      </div>
    </header>
    <router-view />
    <footer>
      <div class="text">
        <p>Made with (dog🐶) love by Lůca and Pauli 🤍</p>
        <p>with help from Sergej</p>
        <p>
          thanks to
          <a href="https://www.czechitas.cz/cs/kdo-jsme" class="czechitas"
            >Czechitas</a
          >
          🤍
        </p>
      </div>
      <img class="logo3" src="../assets/Czechitas_logo_bez_pozadi.png" />
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
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
  font-family: "Roboto", sans-serif;
}

.navbar {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
}

.logo {
  /* width: auto; zmenene */
  height: auto;
  margin-left: 0;
}

.czechitas:hover {
  color: #e5007d;
}
.link {
  color: #616a6b;
  text-decoration: none;
  padding-left: 20px;
  padding-right: 20px;
}

.weatherwidget-io {
  width: 450px;
}
.navigace {
  align-self: center;
  margin-right: 50px;
}
footer {
  height: 250px;
  background-image: linear-gradient(
    270deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(89, 188, 200, 1) 0%,
    rgba(120, 49, 146, 1) 100%
  );
  color: white;
}
.czechitas {
  text-decoration: none;
  color: white;
}
@media (max-width: 499px) {
  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
  .logo {
    display: none;
  }
  .logo2 {
    width: auto;
    height: 70px;
  }
  .logo3 {
    display: none;
  }
  .first-part {
    display: flex;
    flex-direction: row;
  }
  .weatherwidget-io {
    width: 300px;
  }
}
@media (min-width: 500px) and (max-width: 799px) {
  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 16px;
  }
  p {
    padding: 1px;
  }
  .logo {
    display: none;
  }
  .logo2 {
    width: auto;
    height: 90px;
  }
  .logo3 {
    display: none;
  }
  .navbar {
    padding-bottom: 20px;
  }
  .first-part {
    display: flex;
    flex-direction: row;
  }
}
@media (min-width: 800px) {
  footer {
    align-items: center;
    display: flex;
    justify-content: space-around;
  }
  .logo {
    width: 250px;
    align-self: center;
  }
  .logo2 {
    display: none;
  }
  .logo3 {
    width: 250px;
  }
  .navbar {
    padding-bottom: 20px;
  }
  .first-part {
    display: flex;
  }
}
.navigace a {
  color: #616a6b;
  text-decoration: none;
  padding: 0 20px;
  font-weight: 500;
}
.navigace a:hover {
  color: #783192;
}
</style>
