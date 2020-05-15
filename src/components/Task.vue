<template>
  <div>
    <b-card >
      <b-card-text >  {{ value.taskName }}  {{ getDate() }} </b-card-text>
      <span class="fa fa-trash"
            style="float: right"
            @click="$emit('remove-task')"
            title="Remove Task"></span>

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
</style>


