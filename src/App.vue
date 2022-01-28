<script>
import Navbar from "./components/Navbar.vue";
import ContainerHouses from "./components/ContainerHouses.vue";

export default {
  components: {
    Navbar,
    ContainerHouses,
  },
};
</script>

<template>
  <Navbar />
  <ContainerHouses />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Archivo&family=Sora:wght@800&display=swap");

:root {
  --color-secundary: #f7f6f2;
  --color-primary: #1e3163;
  --color-accent: #ee6f57;
}

html,
body {
  height: 100%;
}

html {
  font-size: 20px;
  background-color: var(--color-secundary);
}

body {
  font-family: "Archivo", sans-serif;
  max-width: 2000px;
  margin: 0 auto;
  color: var(--color-primary);
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  line-height: 1.5;
  list-style: none;
  text-decoration: none;
  outline: none;
}

@media (min-width: 768px) {
  html {
    font-size: 24px;
  }
}
</style>
