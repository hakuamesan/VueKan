<template>
  <div id="app">
    <Mynav ></Mynav>
    <Board></Board>
  </div>
</template>

<script>
import Mynav from '@/components/Nav.vue'
import Board from '@/components/Board.vue'


export default {
  name: 'App',
  components: {
    Mynav,
    Board
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app {
  @apply container-fluid;

}


</style>
