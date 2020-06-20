<template>
  <div class="container">
    <div class="navbar">
      <img class="logo" src="../assets/rsz_cover.png" />
      <nav class="navigace">
        <router-link class="link" to="/homepage">Mapa</router-link>
        <router-link class="link" to="/homepage">Seznam tras</router-link>
        <router-link class="link" to="/trasa/:id">Go to Page 1</router-link>
      </nav>
    </div>
    <router-view class="view" />
  </div>
</template>

<script>
export default {
  name: "App"
};
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
}

.navigace {
  align-self: center;
  margin-right: 50px;
}

.view {
}
</style>

