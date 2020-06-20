<template>
  <div class="container">
    <router-link to="/homepage">Logo</router-link>
    <router-link to="/trasa/petrinske-sady">Go to Page 1</router-link>
    <router-view />
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
</style>