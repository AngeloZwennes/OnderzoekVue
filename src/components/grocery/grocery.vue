<template>
     <div class="grocery">
        <h2>Grocery</h2>

         <ul class="list-group">
           <li  v-for="(item, index) in itemList.grocery_item.item" class="list-group-item clearfix">
           
          {{index}} || {{item.name}} || {{item.amount}}
                        <span class="pull-right button-group">
                 <button type="button" class="btn btn-danger"><i class="fa fa-times" aria-hidden="true" v-on:click="deleteGrocery(index)"></i></button>
               </span>
           
           </li>
         </ul>

         <!-- Button trigger modal -->
            <div class="create-grocery">
        <div class="row">
            <div class="col-sm-12">
                <button class="btn btn-success" data-toggle="modal" data-target="#create-grocery-item"><i class="fa fa-plus-circle"></i></button>
            </div>
        </div>
        <div id="create-grocery-item" class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Create an Grocery Item</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label for="start-date"><strong>Grocery name:</strong></label>
                                    <input type="field" class="form-control" id="groceryname" v-model="newitem.name">
                                    <label for="start-date"><strong>Grocery amount:</strong></label>
                                    <input type="field" class="form-control" id="groceryamount" v-model="newitem.amount">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" v-on:click="addItem" data-dismiss="modal">Save</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
     </div>
</template>

<script>
export default {
    name: 'Grocery',
     data: function() {
         return  {
           groceryList: [],
           jsonString: '{"grocery_item": {"item": [{"name": "New", "amount": "3"},{"name": "Second", "amount": "2"}]}}',
           itemList: [],
           newitem: [], 
         }
    },
    created: function () {
        this.fetchData();
        this.decodeList();
    },
    methods: {
        fetchData: function () {
            this.familyId = JSON.parse(localStorage.getItem('dbUser')).familyId
            this.$http.get('https://stefanbode.nl/api/grocerie/read_by_family.php?family_id=1').then(response => {
                this.groceryList = response.data.records;
             })
        },
        deleteGrocery: function (index) {
            this.itemList = Vue.delete(this.itemList.grocery_item.item, index);
            var newjsonstring = JSON.stringify(this.itemList);
              this.$http.get('https://stefanbode.nl/api/grocerie/update.php?family_id=1&grocerie_item='.newjsonstring).then(response => {
                this.fetchData();
            });
           
        },
        decodeList: function (){
            var decode = JSON.parse(this.jsonString);
            this.itemList = decode;
        },

        addItem: function(){
            console.log(this.newitem);
            this.itemList.grocery_item.item.push({ name: this.newitem.name, amount: this.newitem.amount});
            var newjsonstring = JSON.stringify(this.itemList);
            this.$http.get('https://stefanbode.nl/api/grocerie/update.php?family_id=1&grocerie_item='.newjsonstring).then(response => {
                this.fetchData();
            });
           
        }
    },
    components: {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>