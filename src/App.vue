<template>
  <HeaderStart />
  <div class="main">
  <TaskMenu />
  <BoardTask />
</div>
  <ModalNewTask v-if="$store.state.modalNewTaskActve" />
  <ModalChangeTask v-if="$store.state.editableTasks" :task="$store.state.editableTasks" />


</template>

<script>
import HeaderStart from '@/components/HeaderStart.vue'
import TaskMenu from '@/components/TaskMenu.vue'
import ModalNewTask from '@/components/ModalNewTask.vue'
import BoardTask from '@/components/boardTask/BoardTask.vue'
import ModalChangeTask from '@/components/ModalChangeTask.vue'

export default {
  name: 'App',
  created () {
    if(this.$store.state.editableTasks) {

    console.log(this.$store.state.editableTasks)
    }
  },
  components: {
    HeaderStart,
    TaskMenu,
    ModalNewTask,
    BoardTask,
    ModalChangeTask
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.main {
  display: flex;
}
</style>
