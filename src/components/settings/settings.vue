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
                    <div class="col-sm-4"></div>
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
          name: ""
        },
      }
    },
    methods: {
      getUser() {
        this.user = JSON.parse(localStorage.getItem('dbUser'));
      },
      logOut: function(){
        localStorage.removeItem('localUser');
        localStorage.removeItem('dbUser');
        this.$router.push('/');
      },
      createFamily: function() {
        console.log("TEST");
        this.$http.get('http://stefanbode.nl/api/family/create.php?name='+ this.family.name).then(response => {
          //fetch created family
          console.log(response);
          this.$http.get('http://stefanbode.nl/api/family/read_one.php?name='+ this.family.name).then(createdFamily => {
            console.log(createdFamily.body);
          })
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