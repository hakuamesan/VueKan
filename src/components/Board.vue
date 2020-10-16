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
  margin:0;
  overflow: hidden;
}
body::-webkit-scrollbar {
  width: 5px;               /* width of the entire scrollbar */
}

* {
  scrollbar-width: thin;
}

/* Works on Chrome/Edge/Safari */
*::-webkit-scrollbar {
  width: 12px;
}
*::-webkit-scrollbar-thumb {
  border-radius: 20px;
}

#todo{
  background-color: rgba(186,225,255,.7);
  overflow-y: auto;
  float: left;
  height: 900px;
  width: 33%;
  box-sizing: border-box;
  margin:1px;
}

#doing{
  background-color: rgba(255,223,186,.7);
  overflow-y: auto;
  float: left;
  height: 900px;
  width: 33%;
  box-sizing: border-box;
}

#done{
  background-color: rgba(186,255,201,.7);
  overflow-y: auto;
  float: left;
  height: 900px;
  width: 33%;
  box-sizing: border-box;
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

