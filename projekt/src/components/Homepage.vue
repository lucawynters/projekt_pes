<template>
  <div class="container">
    <div class="header">
      <h1>Prahou se psem</h1>
      <p
        class="about"
      >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean id metus id velit ullamcorper pulvinar. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean id metus id velit ullamcorper pulvinar. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
      <button class="hpbut">Button</button>
    </div>
    <div class="mapa">
      <div class="main">
        <h2>Toto je hlavní mapa</h2>
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1EgEwwP7VEbi22zyufEuLC7sFEWcsrhOR"
          width="640"
          height="480"
        ></iframe>
      </div>
    </div>
    <div class="seznam">
      <h2>Toto je část se seznamem</h2>
    </div>
  </div>
</template>

<script>
export default {};
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
  height: 450px;
  justify-content: flex-end;
  padding: 50px;
}
button {
  width: 200px;
  color: rgba(0, 0, 0, 1);
  font-size: 15px;
  border-radius: 10px;
  border: none;
  align-self: center;
  padding: 15px 0;
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
}
.about {
  color: white;
  margin-bottom: 100px;
  width: 350px;
  align-self: center;
  text-align: center;
}

.mapa {
  display: flex;
  flex-direction: column;
}

.main {
  align-self: center;
}

.seznam {
  display: flex;
  flex-direction: column;
}
</style>
