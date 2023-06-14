import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
  state () {
    return {
      modalNewTaskActve: false,
      tasks: [],
      editableTasks: null,
      isTaskToday: false,
      count: 0,
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    TOGGLE_MODAL (state) {
      state.modalNewTaskActve =!state.modalNewTaskActve
    },
    ACTIVE_TASK_TODAY (state) {
      state.isTaskToday = true
    },
    DISABLE_TASK_TODAY (state) {
      state.isTaskToday = false
    },
    CLEARE_EDITABLE_TASK (state) {
      state.editableTasks = null
    },
    SET_EDITABLE_TASK (state, task) {
      state.editableTasks = task
    },
    ADD_TASK (state, task) {
      state.tasks.push(task)
    },
    DELETE_TASK (state, id) {
      const index = state.tasks.findIndex((task) => task.id === id)
      state.tasks.splice(index, 1)
    },
    EDIT_TASK (state, changeTask) {
      const index = state.tasks.findIndex((task) => task.id === changeTask.id)
      state.tasks[index] = {...changeTask}
    },   
  },
  getters: {
    tasksToday: (state) => () => {
      return state.tasks.filter((task) => new Date (task.date).toLocaleDateString() === new Date().toLocaleDateString())
    }
  }
})
export default store
