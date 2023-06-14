<template>
   <el-container >
      <el-header class="header">
        <el-button class="create-btn"
         @click="openModal"
         type="info">
         <el-icon><CirclePlus />
        </el-icon><span>Создать</span>
      </el-button>
      <h1 class="heading">Ваши задачи</h1>
      </el-header>
    </el-container>
  </template>
  
  <script>
  import { CirclePlus } from '@element-plus/icons-vue'
  export default {
    name: 'headerStart',
    components: {
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
    align-items: center;
    gap: 10px;
    padding-left: 40px;
  }
  .heading {
    color: white;
    margin: 0;
    width: 100%;
  }
  .create-btn {
    display: flex;
    gap: 8px;  
  }
 
  </style>
  