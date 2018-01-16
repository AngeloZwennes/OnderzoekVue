<template>
    <div class="calendar-component">
        <div id="skipbar" class="row">
            <div class="col-sm-4">
                <span v-on:click="previousDay" class="skipbar-button"><strong><i class="fa fa-arrow-left"></i> Previous day</strong></span>
            </div>
            <div class="col-sm-4 center">
                <span v-on:click="toDay" class="skipbar-button"><strong>Today</strong></span>
            </div>
            <div class="col-sm-4 right">
                <span v-on:click="nextDay" class="skipbar-button"><strong>Next day <i class="fa fa-arrow-right"></i></strong></span>
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
        <div class="row">
            <div class="col-md-6">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" v-on:click='getCalendarItemsForDate' v-model="familyAgenda" id="family_agende">
                    <label class="form-check-label" for="family_agende">Show family calendar</label>
                </div>
            </div>
            <div class="col-md-6">
                <CreateCalendarItem></CreateCalendarItem>
            </div>
        </div>
        <hr>
        <div class="row">
            <div v-for="item in itemsForDate" class="col-md-12">
                <div class="card">
                    <div class="card-header">{{ item.title }}</div>
                    <div class="card-body">
                        <h6 class="card-subtitle mb-2 text-muted">{{ item.start_date }} till {{ item.end_date }}</h6>
                        {{item.description}}
                        <div class="right">
                            <button v-if="item.user_id = userId" v-on:click="deleteCalendarItem(item.agenda_id)" class="btn btn-danger card-link">delete</button>
                        </div>
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
                userId: Number,
                familyId: Number,
                familyAgenda: Boolean
            }
        },
        methods: {
            previousDay: function () {
                this.date.setDate(this.date.getDate() - 1)
                this.viewAbleDate = this.date.toDateString()
                this.getCalendarItemsForDate()
            },
            toDay: function () {
                this.date = new Date()
                this.viewAbleDate = this.date.toDateString()
                this.getCalendarItemsForDate()
            },
            nextDay: function () {
                this.date.setDate(this.date.getDate() + 1)
                this.viewAbleDate = this.date.toDateString()
                this.getCalendarItemsForDate()
            },
            getCalendarItemsForDate: function () {
                if (this.familyAgenda) {
                    this.$http.get(
                        '//stefanbode.nl/api/agenda/read_by_familydate.php?' +
                        'family_id=' + this.userId +
                        '&start_date=' + this.date.getFullYear() + '-' + this.date.getMonth() + 1 + '-' + this.date.getDate()
                    ).then(response => {
                        this.itemsForDate = response.data.records
                    })

                } else {
                    this.$http.get(
                        'https://stefanbode.nl/api/agenda/read_by_startdate.php?' +
                        'user_id=' + this.userId +
                        '&start_date=' + this.date.getFullYear() + '-' + this.date.getMonth() + 1 + '-' + this.date.getDate()
                    ).then(response => {
                        this.itemsForDate = response.data.records
                    })
                }

            },
            deleteCalendarItem: function (itemId) {
                1
                this.$http.get(
                    'https://stefanbode.nl/api/agenda/delete.php?' +
                    'agenda_id=' + itemId
                ).then(response => {
                    this.getCalendarItemsForDate()
                })
            }

        },
        created: function () {
            this.date = new Date();
            this.viewAbleDate = this.date.toDateString();
            this.userId = JSON.parse(localStorage.getItem('dbUser')).user_id
            this.familyId = this.userId = JSON.parse(localStorage.getItem('dbUser')).family_id
            this.$http.get(
                'https://stefanbode.nl/api/agenda/read_by_startdate.php?' +
                'user_id=' + this.userId +
                '&start_date=' + this.date.getFullYear() + '-' + this.date.getMonth() + 1 + '-' + this.date.getDate()
            ).then(response => {
                this.itemsForDate = response.data.records
            });
            this.familyAgenda = false;
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