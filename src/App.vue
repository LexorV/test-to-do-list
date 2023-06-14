<template>
  <HeaderStart />
  <TaskMenu />
  <ModalNewTask />

</template>

<script>
import HeaderStart from '@/components/HeaderStart.vue'
import TaskMenu from '@/components/TaskMenu.vue'
import ModalNewTask from '@/components/ModalNewTask.vue'

export default {
  name: 'App',
  components: {
    HeaderStart,
    TaskMenu,
    ModalNewTask
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
</style>
