<template>
 <div id="myboard" class="">
    <div class="row" >
          <TaskStatus id="todo" title="Todo" class="col-md" colName="To Do" columnIndex=0></TaskStatus>
          <TaskStatus id="doing" title="Doing" class="col-md" colName="Doing" columnIndex=1></TaskStatus>
          <TaskStatus id="done" title="Done" class="col-md" colName="Done" columnIndex=2></TaskStatus>
      </div>
 </div>
</template>

<script>
import TaskStatus from '@/components/TaskStatus';

export default {
  name: 'Board',
  data(){
    return {
    }
  },
  components: {
    TaskStatus,
  }
 
}
</script>

<style>

html, body, #myboard {
  background-color: rgba(186,255,255,.5);
}
#todo{
  background-color: rgba(186,225,255,.7);
}

#doing{
  background-color: rgba(255,223,186,.7);
}

#done{
  background-color: rgba(186,255,201,.7);
}

.col-sm, .row, .column {
  height: 100%;
  width: 100%;
  padding-left: 1rem;
}
.col-sm {
  border-left: 0.5rem solid #EFEFEF;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.col-sm:first-child {
  border-left: 0;
}
.column-title {
  text-align: center
}
.column-header {
  text-align: center;
}
.fa {
  cursor: pointer;
}

.body {
  color: #2c3e50;
}
</style>

