<template>
  <div id="app">
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar }
};
</script>

<style>
/* Garante que o body não tenha scroll lateral */
body {
  margin: 0;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #e4e4e4;
  color: #fff;
}

/* Container principal */
#app {
  min-height: calc(100vh - 50px); /* Altura total menos a navbar */
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Área de conteúdo abaixo da navbar */
.content {
  flex-grow: 1;
  width: 100%;
  padding: 0;
}

/* Responsivo para telas menores */
@media (max-width: 768px) {
  .content {
    padding-top: 50px;
  }
}
</style>