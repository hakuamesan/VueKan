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
    addTask (state, { columnIndex, task }) {
      state.columns[columnIndex].tasks.push(task)
    }
  }
});

store.subscribe((mutations, state) => {
  localStorage.setItem('vuekan', JSON.stringify(state))
});

export default store

