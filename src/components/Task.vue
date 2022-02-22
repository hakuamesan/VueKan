<template>
  <div class="mt-3">
    <b-card >
      <div id="tname">  {{ value.taskName }}</div>
      <div id="tdate">  {{ getDate() }} </div>

      <div class="flex-container">
        
        <div id="trash" class="fa fa-trash"
            style="display: flex; float: right"
            @click="$emit('remove-task')"
            title="Remove Task"></div>
      </div>
    </b-card>


  </div>
</template>

<script>

export default{
  name: 'Task',
  props: ['value'],
  data() {
    return {
      viewDesc: false
    }
  },
  methods: {
    getDate() {
      if ( this.value.taskDate === '' || this.value.taskDate === undefined) return ''

     let d = new Date(this.value.taskDate);
      console.log(d.toDateString())

      return d.toDateString()
    }, 
    movetask: function(taskIndex, { taskName, taskDescription}) {
      this.$store.commit('moveTask', {
        columnIndex: this.columnIndex,
        taskIndex,
        taskName,
        taskDescription
      })
    },

  }
}
</script>

<style>
/*
*{
  outline: 1px solid red;
}
*/
#tname{
  text-align: left;
  padding-bottom: .5rem;
}

#tdate{
  float: left;
  text-align: right;
  color: darkgreen;
}

.flex-container{
  display: flex;
  flex-direction: row;
  padding-right: 5px;
  margin-right: 5px;
  align-items: flex-end;
/*  justify-content: space-between;*/
}
b-card {
  padding: 0.5rem;
  margin-bottom: .5rem;
  flex-direction: column;
  border-radius: 15;
}
</style>


