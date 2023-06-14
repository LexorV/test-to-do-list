import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
  state () {
    return {
      modalNewTaskActve: false,
      tasks: [],
      editableTasks: null,
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    TOGGLE_MODAL (state) {
      state.modalNewTaskActve =!state.modalNewTaskActve
    },
    CLEARE_EDITABLE_TASK (state) {
      state.editableTasks = null
    },
    SET_EDITABLE_TASK (state, task) {
      state.editableTasks = task
      console.log(state.editableTasks )
    },
    ADD_TASK (state, task) {
      state.tasks.push(task)
    },
    DELETE_TASK (state, id) {
      const index = state.tasks.findIndex((task) => task.id === id)
      state.tasks.splice(index, 1)
    },
    EDIT_TASK (state, changeTask) {
      console.log(changeTask)
      const index = state.tasks.findIndex((task) => task.id === changeTask.id)
      state.tasks[index] = {...changeTask}
    }



  }
})
export default store
