<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">VueKan</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-button size="sm" class="my-2 my-sm-0" v-b-modal.show-addTask >New Task</b-button>
    </b-navbar-nav>

    <b-modal id="show-addTask" centered title="Add Task" @ok="onSubmit">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Task:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.taskName"
          type="text"
          required
          placeholder="Enter task"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Description:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.taskDescription"
          placeholder="Description"
        ></b-form-input>
      </b-form-group>

    </b-form>    
    </b-modal>


  </b-navbar>
  </div>
</template>

<script>
export default {
  name:'Mynav',
    data() {
      return {
        form: {
          taskName: '',
          taskDescription: '',
        },
        show: true
      }
    },
    methods: {
      addTask(){

      },
      onSubmit(e) {
        e.preventDefault()
        console.log(JSON.stringify(this.form))
        this.$emit('update-task', { taskName: this.taskName, taskDescription: this.taskDescription})
        this.$nextTick( ()=> {
          this.$bvModal.hide('show-addTask')
        })
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.taskName= ''
        this.form.taskDescription= ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }


</script>

<style>

</style>

