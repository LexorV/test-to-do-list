<template>
    <div class="modal-background"></div>
     <el-col class="modal" :span="12" :offset="6">
        <el-button @click="closeForm" class="close-icon" size="large" :icon="Search" circle>
            <el-icon size="30px"><Close /></el-icon>
        </el-button>
        <h4>Изменить задачу</h4>
    <el-form :model="form" label-width="120px">
      <el-form-item label="Название">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Дата начала">
        <el-col :span="11">
          <el-date-picker
            v-model="form.date"
            type="date"
            placeholder="Выберете дату"
            style="width: 100%"
          />
        </el-col>
        <el-col :span="2" class="text-center">
          <span class="text-gray-500">-</span>
        </el-col>
        <el-col :span="11">
          <el-time-picker
            v-model="form.time"
            placeholder="Время выполнения"
            style="width: 100%"
          />
        </el-col>
      </el-form-item>
      <el-form-item label="Срочная">
        <el-switch v-model="form.required" />
      </el-form-item>
      <el-form-item label="Описание">
        <el-input rows="12" v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Создать</el-button>
      </el-form-item>
    </el-form>
</el-col>
  </template>
  
  <script>
  import { reactive } from 'vue'
  import { Close } from '@element-plus/icons-vue'
  export default {
    components: {
        Close
    },
    data () {
        return {
            form: reactive({
                name: this.task.name || '',
                date: this.task.date || '',
                time: this.task.time || '',
                required:this.task.required || false,
                desc: this.task.desc || ''
            })
        }
    },
    props: {
      task: {
        type: Object,
        default: () => ({})
      }
    },
    methods: {
      closeForm () {
        this.$store.commit('CLEARE_EDITABLE_TASK')
        this.name = ''
        this.date=''
        this.time=''
        this.required = false
        this.desc = ''
      },
        onSubmit () {
            this.$store.commit('EDIT_TASK', {id:this.task.id, ...this.form})
            this.closeForm()
        }
    }
}
  </script>
  <style scoped>
  .modal {
    background-color: white;
    border: 1px solid #020202;
    border-radius: 20px;
    padding: 40px;
    min-width: 45%;
    position: absolute;
    top: 20%;
    left: 1%;
    z-index: 60;
  }
  .modal-background {
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 50;
  }
  .name-field {}
  .close-icon {
    position: absolute;
    right: 30px;
    top: 30px;
  }
  </style>