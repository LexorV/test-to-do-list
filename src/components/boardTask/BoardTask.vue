<template>
     <el-main class="main">
    <el-col class="board" :offset="2" :span="4">
        <OneTask
        v-for="task in $store.state.tasks"
        :key="task.id"
        :task="task"
        />
    </el-col>
</el-main>
</template>

<script>
import OneTask from '@/components/boardTask/OneTask.vue' 
    export default {
        components: {
            OneTask
        }

    }
</script>

<style scoped>
.board {
    display: flex;
    gap: 10px;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
}
.main {
    padding: 10px;
    background-color: rgb(217, 224, 230);
    height: 100vh;
}


</style>