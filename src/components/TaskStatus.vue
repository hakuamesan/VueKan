<template>
  <div class="col-sm">
    <p class="column-title"> {{ colName }} </p>

    <draggable v-model="tasks" group='tasks' style="min-height:100px">
      <Task v-for="(task, index) in tasks" 
        :key="task.name" 
        :value="task"
        @remove-task="removeTask(index)"
        ></Task>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import Task from './Task.vue';

export default{
  name: 'TaskStatus',
  props: {
    colName: String,
    columnIndex: Number
  },
  components: {
    draggable,
    Task
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
 
  }
}
</script>

<style>

</style>

