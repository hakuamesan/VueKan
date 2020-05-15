<template>
  <div class="mt-3">
    <b-card >
      <div id="tname">  {{ value.taskName }}</div><div id="tdate">  {{ getDate() }} </div>
      <div class="fa fa-trash"
            style="float: right"
            @click="$emit('remove-task')"
            title="Remove Task"></div>

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
#tname{
text-align: left;
}

#tdate{
  text-align: right;
  color: darkgreen;
}

b-card {
  padding: 0.5rem;
  margin-bottom: .5rem;
}
</style>


