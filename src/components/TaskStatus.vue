<template>
  <div class="col-sm">
    <p class="column-title"> {{ colName }} </p>

    <draggable v-model="tasks" group='tasks' >
      <Task v-for="(task, index) in tasks" 
        :key="task.name" 
        :value="task"
        @update-task="updateTask(index, $event)"
        @remove-task="removeTask(index)"
        ></Task>
    </draggable>
    <div id="counter"> Count: {{ getCount() }} tasks </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import Task from './Task.vue';

export default{
  name: 'TaskStatus',
  props: {
    colName: String,
    columnIndex: String
  },
  components: {
    draggable,
    Task
  },
  data(){
    return {
    }
  },
  computed: {
     tasks: {
      get () {
//        let index = this.getIndex(this.colName)
        let a = this.$store.state.columns[this.columnIndex].tasks
        console.log(a)
        return a
      },
      set (tasks) {
        let index = this.getIndex(this.colName)
        return this.$store.commit('updateTasks', {
          columnIndex: index,
          tasks
        })
      }
    }
  },
  methods: {
    getIndex(n){
      if ( n === 'To Do') return 0
      else if ( n === 'Doing') return 1
      else if ( n === 'Done') return 2
    },
      removeTask: function(taskIndex) {
      this.$store.commit('removeTask', {
        columnIndex: this.columnIndex,
        taskIndex
      })
    },
    updateTask: function(taskIndex, { taskName, taskDescription}) {
      this.$store.commit('updateTask', {
        columnIndex: this.columnIndex,
        taskIndex,
        taskName,
        taskDescription
      })
    },
    getCount(){
      return this.$store.state.columns[this.columnIndex].tasks.length
    }
 
  }
}
</script>

<style>
.column-title {
  font-style: bold;
  font-size: 1.5rem;
}

#counter {
  background-color: white;
  margin-top: 1rem;
  text-align: left;
  border-radius: 5px;
  padding: .1rem;
}
</style>

