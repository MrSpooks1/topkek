<template>

  <NavBar />

  <RouterView></RouterView>

</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
@import './components/styles/style.css';
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 22px 64px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
}
</style>
