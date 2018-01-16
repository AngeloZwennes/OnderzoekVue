<template>
     <div class="task">
        Family
        <div v-for="item in familyList" class="col-md-2 bg-dark">{{item.name}}</div>
     </div>
</template>

<script>
export default {
    name: 'Task',
     data: function() {
         return  {
           familyList: []
         }
    },
    created: function () {
        this.fetchData();
    },
    methods: {
        fetchData: function () {
            this.$http.get('https://stefanbode.nl/api/user/read_by_family.php?family_id=1').then(response => {
                this.familyList = response.data.records;
                console.log(this.familyList);
             })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>