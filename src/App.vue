<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style >
  @import "assets/reset.css";
  @import "components/font/iconfont.css";
  html{
    font-size: 1vw;
  }
  .app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  ::-webkit-scrollbar{display: none}
  ::-webkit-scrollbar-track{background-color:transparent;}
  ::-webkit-scrollbar-thumb{background-color:transparent;}
  ::-webkit-scrollbar-thumb:hover {background-color:transparent}
  ::-webkit-scrollbar-thumb:active {background-color:transparent}
</style>

