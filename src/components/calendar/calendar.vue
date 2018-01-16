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
        <div class="row">
            <div v-for="item in itemsForDate" class="col-md-12">
                <div class="card">
                    <div class="card-block">
                        <h4 class="card-title">{{ item.title }}</h4>
                        <h6 class="card-subtitle mb-2 text-muted">{{ item.start_date }} - {{ item.end_date }}</h6>
                        <p class="card-text">{{ item.title }}</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    import CreateCalendarItem from './createItem.vue'
    export default {
        name: 'Calendar',
        data() {
            return {
                date: Date,
                viewAbleDate: String,
                itemsForDate: Array,
                userId: Number
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
            this.userId = JSON.parse(localStorage.getItem('dbUser')).user_id
            this.$http.get(
                'https://stefanbode.nl/api/agenda/read_by_startdate.php?' +
                'user_id=' + 1 +
                '&start_date=' + '2017-12-13'
            ).then(response => {
                this.itemsForDate = response.data.records
            })
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