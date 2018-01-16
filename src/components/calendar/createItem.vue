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
                        <h4 class="modal-title">Create a Calendar Item</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="create-item-form">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label for="start-date"><strong>Start date:</strong></label>
                                    <input type="date" v-model="startDate" class="form-control" id="start-date" required>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label for="end-date"><strong>End date:</strong></label>
                                    <input type="date" v-model="endDate" class="form-control" id="end-date" required>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label for="title"><strong>Title:</strong></label>
                                    <input type="text" v-model="title" class="form-control" id="title" required>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label for="description"><strong>Description:</strong></label>
                                    <input type="text" v-model="description" class="form-control" id="description" required>
                                </div>
                            </div>
                        </div>
                    </form>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" for="create-item-form" class="btn btn-primary" v-on:click="save" data-dismiss="modal">Save changes</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    module.exports = {
        data() {
            return {
                startDate: Date,
                endDate: Date,
                title: String,
                description: String,
                UserId: Number
            }
        },
        methods: {
            save: function () {
                this.$http.get(
                    'https://stefanbode.nl/api/agenda/create.php?'+
                    'start_date='+ this.startDate + 
                    '&end_date=' + this.endDate + 
                    '&title=' + this.title +
                    '&description=' + this.description +
                    '&creator=' + this.UserId + 
                    '&creator=' + this.UserId
                ).then(response => {
                })
            }
        },
        created: function () {
            this.title = '',
            this.description = '',
            this.UserId = JSON.parse(localStorage.getItem('dbUser')).user_id
        },

    }

</script>

<style scoped>
    .create-item {
        text-align: default;
    }
</style>