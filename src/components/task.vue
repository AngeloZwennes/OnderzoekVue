<template>
     <div class="task">
        Task
         <ul class="list-group">
           <li  v-for="item in taskList" class="list-group-item clearfix">{{item.task}}
             <span class="pull-right button-group">
                 <button type="button" class="btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i></button>
               </span>
           </li>
         </ul>

         <!-- Button trigger modal -->
         <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#addTask">
             Add item
         </button>
     </div>
</template>

<script>
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
            this.$http.get('http://stefanbode.nl/api/task/read.php').then(response => {
                this.taskList = response.data.records;
                console.log(this.taskList);
             })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>