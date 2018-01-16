<template>
    <div class="calendar-component">
        <div id="skipbar" class="row">
            <div class="col-sm-4">
                <span v-on:click="previousDay" class="skipbar-button"><strong><i class="fa fa-arrow-left"></i> Yesterday</strong></span>
            </div>
            <div class="col-sm-4 center">
                <span v-on:click="toDay" class="skipbar-button"><strong>Today</strong></span>
            </div>
            <div class="col-sm-4 right">
                <span v-on:click="nextDay" class="skipbar-button"><strong>Tommorow <i class="fa fa-arrow-right"></i></strong></span>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 center">
                <h1>Welcome</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 center">
                <h3> {{ viewAbleDate }} </h3>
            </div>
        </div>
        <CreateCalendarItem></CreateCalendarItem>
    </div>
</template>
<script>
    import CreateCalendarItem from './createItem.vue'
    export default {
        name: 'Calendar',
        data() {
            return {
                date: Date,
                viewAbleDate: String
            }
        },
        methods: {
            previousDay: function () {
                this.date.setDate(this.date.getDate() - 1)
                this.viewAbleDate = this.date.toDateString()
            },
            toDay: function () {
                this.date = new Date()
                this.viewAbleDate = this.date.toDateString()

            },
            nextDay: function () {
                this.date.setDate(this.date.getDate() + 1)
                this.viewAbleDate = this.date.toDateString()
            },
        },
        created: function () {
            this.date = new Date();
            this.viewAbleDate = this.date.toDateString();
        },
        components: {
            CreateCalendarItem
        }
    }

</script>

<style scoped>
    #skipbar {
        font-size: 20px;
    }

    .center {
        text-align: center;
    }

    .right {
        text-align: right;
    }

    .skipbar-button {
        cursor: pointer;
    }
</style>