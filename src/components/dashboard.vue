<template>
     <div class="dashboard">
         <div class="navbar">
             <h2 id="logo dashboard">FamilyCollab</h2>
             <div class="icons">
                 <a class="fa fa-cog" id="settings" @click="goToSettings()"></a>
                 <a class="fa fa-user" id="user"></a>
             </div>
         </div>
         <div class="container modulesspace">
             <div class="row">
                <div class="col-sm-6">
                     <div class="row">
                         <div class="col-sm-6 ">
                             <div class="box1 toprow">
                                 <Photo></Photo>
                             </div>
                         </div>
                         <div class="col-sm-6" >
                             <div class="box2 toprow">
                                 <Family></Family>
                             </div>
                        </div>
                     </div>
                    <div class="row">
                         <div class="col-sm-6 ">
                             <div class="whitebox bottomrow">
                                Groceries
                             </div>
                         </div>
                         <div class="col-sm-6" >
                             <div class="whitebox bottomrow"> <Task></Task></div>
                        </div>
                     </div>
                </div>
                <div class="col-sm-6 ">
                     <div class="row">
                         <div class="col-sm-12">
                             <div class="whitebox largebox">
                                <Calendar></Calendar>
                             </div>
                         </div>
                     </div>
                </div>
             </div>
         </div>
     </div>
</template>

<script>
  import Task from './task/task.vue'
  import Photo from './photo/photo.vue'
  import Calendar from './calendar/calendar.vue'
  import Family from './family/family.vue'

export default {
  name: 'Dashboard',
  components: {
    Calendar,
    Task,
    Photo,
    Family
  },
  methods: {
    goToSettings: function() {
      this.$router.push('/settings');
    },
    logOut: function() {
      localStorage.removeItem('localUser');
      localStorage.removeItem('dbUser');
      this.$router.push('/');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard{
    background:#f9f9f9;
    height:100%;
    width:100%;
    bottom:0px;
}

.whitebox{
    background:#fff;
    padding-left:20px;
    padding-right:20px;
}

.toprow{
    min-height:150px;
    margin-bottom:50px;
}

.largebox{
    min-height:800px;
    padding:20px;
}
.modulesspace{
    padding-top:40px;
}
.bottomrow{
    min-height:600px;
}

.box1{
    padding:20px;
    color:#fff;
    background:#29a0d7;
}
.box2 {
    padding: 20px;
    color: #fff;
    background: #59db75;
}

.navbar {
    background-color: #313ccc;
    height: 70px;
    width: 100%;
}


.navbar h2{
    width:200px;
    padding-left:50px;
    float:left;
}


.navbar .icons{
    padding-top:10px;
    padding-right:50px;
}
#settings {
    float: right;
    font-size: 3em;
    color: white;
    padding: 3px;
    padding-right: 10px;
    cursor: pointer;
}

#dashboard {
    cursor: pointer;
    color: white;
}
#user {
    float: right;
    font-size: 3em;
    color: white;
    padding: 3px;
    padding-right: 10px;
    cursor: pointer;
}

#logo {
    float: left;
    color: white;
}


</style>