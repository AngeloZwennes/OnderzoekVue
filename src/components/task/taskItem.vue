<template>
    <div class="create-item">
        <div class="row">
            <div class="col-sm-12">
                <button class="btn btn-success" data-toggle="modal" data-target="#create-task-item"><i class="fa fa-plus-circle"></i></button>
            </div>
        </div>
        <div id="create-task-item" class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Create an Task Item</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label for="start-date"><strong>Task name:</strong></label>
                                    <input type="field" class="form-control" id="task" v-model="task">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" v-on:click="saveTask" data-dismiss="modal">Save</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    module.exports = {
        data () {
            return {
                task: ''
            }
        },
        methods: {
           saveTask: function () {
                this.familyId = JSON.parse(localStorage.getItem('dbUser')).familyId
                this.$http.get('http://stefanbode.nl/api/task/create.php?task='+this.task+'&family_id='+this.familyId).then(response => {
                    this.$parent.fetchData();
                 })
            }
        }
    }
</script>

<style scoped>
    .create-item{
        text-align: default;
    }
</style>