<template>
 <div class="">
    <div class="row" v-if="!viewArchive">
          <TaskStatus id="todo" title="Todo" class="col-md" colName="To Do" columnIndex=0></TaskStatus>
          <TaskStatus id="doing" title="Doing" class="col-md" colName="Doing" columnIndex=1></TaskStatus>
          <TaskStatus id="done" title="Done" class="col-md" colName="Done" columnIndex=2></TaskStatus>
      </div>
    <Archive v-else></Archive>
 </div>
</template>

<script>
import TaskStatus from '@/components/TaskStatus';
import Archive from '@/components/Archive'

export default {
  name: 'Board',
  data(){
    return {
      viewArchive: false
    }
  },
  components: {
    TaskStatus,
    Archive
  }
 
}
</script>

<style>
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
}
.col-sm {
  border-left: 0.5rem solid #EFEFEF;
  padding-top: 1rem;
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

