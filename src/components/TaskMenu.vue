<template>
    <el-row class="menu" >
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          default-active="1"
          text-color="#fff"
        >
          <el-menu-item  @click="disableTaskToday" index="1">
            <el-icon><icon-menu /></el-icon>
            <span>Общие задачи</span>
          </el-menu-item>
          <el-menu-item  @click="activeTaskToday" index="2">
            <el-icon><setting /></el-icon>
            <span>Задачи на сегодня</span>
          </el-menu-item>
        </el-menu>
    </el-row>
  </template>
  
  <script>
  export default {
    methods: {
      activeTaskToday () {
       this.$store.commit('ACTIVE_TASK_TODAY')
      },
      disableTaskToday () {
        this.$store.commit('DISABLE_TASK_TODAY')
      }
    }
  }

  </script>
    <style scoped>
    @media screen and (max-width: 550px) {
  .menu{
    display: none;
  }
  }
   
    </style>