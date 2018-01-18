<template>
     <div class="photo">
        <h3 class="my-4 text-center text-lg-left">Picture<div class="float-right"><CreatePhotoItem></CreatePhotoItem></div></h3>
          <div class="row text-center text-lg-left">
            <div class="col-lg-3 col-md-4 col-xs-6" v-for="item in photoList" >
              <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" :src="item.photo_url" :alt="item.photo_id">
              </a>
            </div>
          </div>

         <!-- Button trigger modal -->

     </div>
</template>

<script>
import CreatePhotoItem from './photoItem.vue'
export default {
    name: 'Photo',
     data: function() {
         return  {
           photoList: []
         }
    },
    created: function () {
        this.fetchData();
    },
    methods: {
        fetchData: function () {
            this.familyId = JSON.parse(localStorage.getItem('dbUser')).family_id
            this.$http.get('http://stefanbode.nl/api/photo/read_by_family.php?family_id='+this.familyId).then(response => {
                this.photoList = response.data.records;
             })
        }
    },
    components: {
        CreatePhotoItem
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>