<template>
    <div id="skipbar" class="row" >
        <div class="col-sm-4">
                <span ><strong><i class="fa fa-arrow-left"></i> Yesterday</strong></span>
        </div>
        <div class="col-sm-4 center">
            <span v-on:click="toDay"><strong>Today</strong></span>
        </div>
        <div class="col-sm-4 right">
            <span><strong>Tommorow <i class="fa fa-arrow-right"></i></strong></span>
        </div>
    </div>          
</template>
<script>
    module.exports = {
        data: function(){
            return {

            }
        },
        methods: {
            toDay: function () {
                console.log('test')
            }
  }
    }
</script>

<style scoped>
    #skipbar{
        font-size: 20px;
    }
    .center{
        text-align: center;
    }
    .right{
        text-align: right;
    }
</style>