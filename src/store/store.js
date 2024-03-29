import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    columns: [
               { name: 'To Do', tasks: [] },
               { name: 'Doing', tasks: [] },
               { name: 'Done', tasks:  [] }
             ]
  },
  getters: {
    numberOfColumns: state => {
      return state.columns.length
    }
  },
  mutations: {
    initialiseVueKan (state) {
      if (localStorage.getItem('vuekan')) {
        this.replaceState(Object.assign(state, JSON.parse(localStorage.getItem('vuekan'))))
      }
    },
    removeTask (state, { columnIndex, taskIndex }) {
      state.columns[columnIndex].tasks.splice(taskIndex, 1)
    },
    moveTask (state, { columnIndex, taskIndex, taskName, taskDate }){
      console.log("cur colIndex = " + columnIndex + " taskIndex=" + taskIndex); 
      console.log("taskName = " + taskName + " taskDate = " + taskDate)
    },
    addTask (state, { columnIndex, task }) {
    console.log("adding tasks:")
    console.table(task)

      state.columns[columnIndex].tasks.push(task)
    },
    updateTasks (state, { columnIndex, tasks }) {
      state.columns[columnIndex].tasks = tasks
    },
    updateTask (state, { columnIndex, taskIndex, taskName, taskDate}) {
      state.columns[columnIndex].tasks[taskIndex].name = taskName
      state.columns[columnIndex].tasks[taskIndex].description = taskDate
    },


  }
});

store.subscribe((mutations, state) => {
  localStorage.setItem('vuekan', JSON.stringify(state))
});

export default store

