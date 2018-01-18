<template>
    <div>
        <div class="container">
            <div>
                <h1>User</h1>
                <div class="row">
                    <div class="col-sm-4">Name</div>
                    <div class="col-sm-8">
                        <input :disabled="true" v-model="user.name">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">E-mail</div>
                    <div class="col-sm-8">
                        <input :disabled="true" v-model="user.email">
                    </div>
                </div>
                <h1>Family</h1>
                <div v-if="user.family_id !== '0'" class="row">
                    <div class="col-sm-4">Family name</div>
                    <div class="col-sm-8">
                        <input v-model="family.name">
                    </div>
                </div>
                <div v-if="user.family_id === '0'" class="row">
                    <div class="col-sm-4">
                        <h2>Create a family</h2>
                    </div>
                    <div class="col-sm-8">
                    </div>
                </div>
                <div v-if="user.family_id === '0'" class="row">
                    <div class="col-sm-4">Family name</div>
                    <div class="col-sm-8">
                        <input v-model="family.name">
                        <button  @click="createFamily()" class="btn btn-success" id="saveBtn">
                            <i class="fa fa-floppy-o"></i>
                        </button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">Save info</div>
                    <div class="col-sm-8">
                        <button @click="saveInfo()">Save information</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">Return to dashboard</div>
                    <div class="col-sm-8">
                        <button @click="returnToDashboard()">Return to dashboard</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">Log out</div>
                    <div class="col-sm-8">
                        <button @click="logOut()">Log out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Settings',
    data () {
      return {
        user: {},
        family: {
          family_id: "",
          name: ""
        },
      }
    },
    methods: {
      returnToDashboard() {
        this.$router.push('dashboard');
      },
      saveInformation() {
        this.$http.post('https://stefanbode.nl/api/user/update.php?user_id='+ this.user.id + '&email=' + this.user.email + '&name= '+ this.user.name +
          '&family_id='+ this.user.family_id);
        localStorage.setItem('DbUser',this.user);
      },
      getUser() {
        this.user = JSON.parse(localStorage.getItem('dbUser'));
        this.getFamilyById(this.user.family_id);
      },
      logOut: function(){
        localStorage.removeItem('localUser');
        localStorage.removeItem('dbUser');
        this.$router.push('/');
      },
      getFamilyById: function(id){
        this.$http.get('http://stefanbode.nl/api/family/read_one.php?family_id='+ id).then(response => {
          if(response.body.family_id === 0) {
          }
          this.family.name = response.body.name;
          this.family.family_id = response.body.family_id;
        });
      },
      createFamily: function() {
        this.$http.get('http://stefanbode.nl/api/family/create.php?name='+ this.family.name).then(response => {
          //fetch created family
          this.family.family_id = response.body.family_id;
          this.family.name = response.body.name;
          this.user.family_id = this.family.family_id;
          this.$http.post('http://stefanbode.nl/api/user/update.php?user_id=' + this.user.user_id + '&email=' + this.user.email +
            '&name=' + this.user.name + '&family_id=' + response.body.family_id);
          localStorage.setItem('dbUser',JSON.stringify(this.user));
        })
      }
    },
    beforeMount() {
      this.getUser();
    }
  }
</script>

<style>
    .container {
        background-color: #F8F8F8;
        padding: 1em;
    }

    .row {
        padding: 1em !important;
    }
    .saveBtn{
        height: 10em;
        width: 10em;
    }
</style>