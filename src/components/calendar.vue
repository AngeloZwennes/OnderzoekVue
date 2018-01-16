Vue.component('calendar', {
    template: \'<template>
                    <div id="skipbar" class="row" >
                        <div class="col-sm-4">
                            <span v-on:click="previousDay"><h4><i class="fa fa-arrow-left"></i> Yesterday</h4></span>
                        </div>
                        <div class="col-sm-4 center">
                            <span v-on:click="toDay" ><h4>Today</h4></span>
                        </div>
                        <div class="col-sm-4 right">
                            <span v-on:click="nextDay"><h4>Tommorow <i class="fa fa-arrow-right"></i></h4></span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 center">
                            <h1>Welcome</h1>
                        </div>  
                    </div>
                    <div class="row">
                        <div class="col-sm-12 center">
                            <h3>{{message}}</h3>
                        </div>
                    </div>
                </template>'
    data: {
        message: 'test'
    }
})
<script>
    
</script>