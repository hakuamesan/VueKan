<template>
  <div>
    <b-card >
      <b-card-text >  {{ this.value.name }} {{ getName() }}  </b-card-text>
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
    getName() {
      console.log("name=" + this.value.name);
    }

  }

}
</script>

<style>
</style>


