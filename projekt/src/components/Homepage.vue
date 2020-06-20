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
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1EgEwwP7VEbi22zyufEuLC7sFEWcsrhOR"
        width="640"
        height="480"
      ></iframe>
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
.hpbut {
  width: 200px;
  color: rgba(0, 0, 0, 1);
  font-size: 15px;
  height: 50px;
  border-radius: 10px;
  border: none;
  align-self: center;
}
h1 {
  color: white;
  font-size: 60px;

  text-align: center;
}
.about {
  color: white;
  padding-bottom: 20px;
}

.mapa {
  display: flex;
}
</style>
