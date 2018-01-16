<template>
    <div class="create-item">
        <div class="row">
            <div class="col-sm-12">
                <button class="btn btn-success" data-toggle="modal" data-target="#create-calendar-item"><i class="fa fa-plus-circle"></i></button>
            </div>
        </div>
        <div id="create-calendar-item" class="modal" tabindex="-1" role="dialog">
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
                                    <input type="field" class="form-control" id="start-date">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Save</button>
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
            }
        },
        methods: {

        },
        created: function () {
        },

    }
</script>

<style scoped>
    .create-item{
        text-align: default;
    }
</style>