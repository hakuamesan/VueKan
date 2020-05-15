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
          id="taskName"
          v-model="taskName"
          type="text"
          required
          placeholder="Enter task"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Date:" label-for="taskDate">
<!--        <b-calendar
          id="taskDate"
          v-model="taskDate"
          :date-format-options="{day:'numeric', month:'short', year:'numeric'}"
          locale="en-GB"
          ></b-calendar>-->
          <b-form-datepicker id="taskDate" v-model="taskDate" class="mb-2"></b-form-datepicker>
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
        taskName: '',
        taskDate: '',
        show: true
      }
    },
    methods: {
      addTask(){

      },
      onSubmit(e) {
        e.preventDefault()
        this.$emit('update-task', { taskName: this.taskName, taskDate: this.taskDate})
        let task = { taskName: this.taskName, taskDate: this.taskDate}
        console.log("in nav bar add task:")
        console.table(task)
        this.$store.commit('addTask', { columnIndex: 0, task});
        this.$nextTick( ()=> {
          this.$bvModal.hide('show-addTask')
        })
        this.taskName = ''
        this.taskDate = ''
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.taskName= ''
        this.taskDate= ''
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

