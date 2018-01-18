<template>
     <div class="task">
        Task
         <ul class="list-group">
           <li  v-for="item in taskList" class="list-group-item clearfix">{{item.task}}
             <span class="pull-right button-group">
                 <button type="button" class="btn btn-danger"><i class="fa fa-times" aria-hidden="true" v-on:click="deleteTask(item.task_id)"></i></button>
               </span>
           </li>
         </ul>

         <!-- Button trigger modal -->
        <CreateTaskItem someFunctionParent="fetchData"></CreateTaskItem>
     </div>
</template>

<script>
import CreateTaskItem from './taskItem.vue'
export default {
    name: 'Task',
     data: function() {
         return  {
           taskList: []
         }
    },
    created: function () {
        this.fetchData();
    },
    methods: {
        fetchData: function () {
            this.familyId = JSON.parse(localStorage.getItem('dbUser')).family_id;
            this.$http.get('https://stefanbode.nl/api/task/read_by_family.php?family_id='+this.familyId).then(response => {
                this.taskList = response.data.records;
             })
        },
        deleteTask: function (id) {
           this.$http.get('http://stefanbode.nl/api/task/delete.php?task_id='+id).then(response => {
               this.fetchData();
            })
        }
    },
    components: {
        CreateTaskItem
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>