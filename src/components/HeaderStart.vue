<template>
   <el-container >
      <el-header class="header">
        <el-icon size="30px"><CaretBottom /></el-icon>
        <h1 class="heading">to do list</h1>
        <el-button class="create-btn"
         @click="openModal"
         type="info">
         <el-icon><CirclePlus />
        </el-icon><span>Создать</span>
      </el-button>
      </el-header>
    </el-container>
  </template>
  
  <script>
  import { CaretBottom, CirclePlus } from '@element-plus/icons-vue'
  export default {
    name: 'headerStart',
    components: {
      CaretBottom,
      CirclePlus
    },
    methods: {
      openModal() {
        this.$store.commit('TOGGLE_MODAL')
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .header {
    background-color: #545c64;
    display: flex;
    align-items: flex-end;
    gap: 10px;
  }
  .heading {
    margin: 0
  }
  .create-btn {
    display: flex;
    gap: 8px;  
  }
 
  </style>
  