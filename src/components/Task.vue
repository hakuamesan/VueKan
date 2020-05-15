<template>
  <div class="mt-3">
    <b-card >
      <div id="tname">  {{ value.taskName }}</div>

      <div class="flex-container">
      <div id="tdate">  {{ getDate() }} </div>
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
  props: ['value']
  ,
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
    }
  }
}
</script>

<style>
/*
*{
  outline: 1px solid red;
}*/

#tname{
  text-align: left;
  padding-bottom: .5rem;
}

#tdate{
  text-align: right;
  color: darkgreen;
}

.flex-container{
  display: flex;
  justify-content: space-between;
}
b-card {
  padding: 0.5rem;
  margin-bottom: .5rem;
}
</style>


