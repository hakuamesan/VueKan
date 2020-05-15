<template>
  <div>
    <b-card >
      <b-card-text >  {{ value.taskName }}   </b-card-text>
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
  
}
</script>

<style>
</style>


