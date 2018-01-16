<template>
       <div id="logincontainer">
        <form name='form-login'>
            <span class="fontawesome-user"></span>
            <input v-model="user.name" type="text" name="nameField" placeholder="Name" />
            <span class="fa fa-envelope"></span>
            <input v-model="user.email" type="email" email name="emailField" id="user" placeholder="Email" />
            <button class="BtnSubmit" v-on:click.self.prevent="login()">Log in</button>
         </form>
    </div>
</template>


<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        name: '',
        email: ''
      },
      msg: 'No message',
    }
  },
  methods: {
    openDashboard: function() {
      this.$router.push('/dashboard');
    },
    setDbUser: function(user) {
      if(user.body.user_id != null) {
        localStorage.setItem('dbUser',JSON.stringify(user.body));
        this.openDashboard();
      } else {
        //user is not found, create user
        this.$http.get('https://stefanbode.nl/api/user/create.php?name=' + this.user.name + '&password=test&email=' + this.user.email).then(response => {
          this.$http.get('https://stefanbode.nl/api/user/read_one.php?email='+ this.user.email).then(createdUser => {
            localStorage.setItem('dbUser',JSON.stringify(createdUser.body));
            this.openDashboard();
          })
        })
      }
    },
    login: function() {
      if(this.user.name != "" && this.user.email != "") {
        localStorage.setItem('localUser',JSON.stringify(this.user));
        this.$http.get('http://stefanbode.nl/api/user/read_one.php?email=' + this.user.email).then(response=> {
          this.setDbUser(response);
        });
      } else {
        //velden zijn leeg
      }
    },
    checkExistingUser: function() {
      if(localStorage.getItem('localUser') === null) {
        console.log('USER IS NULL');
      } else {
        console.log("DBUSEROPHALEN");
        this.$http.get('http://stefanbode.nl/api/user/read_one.php?email=' + this.user.email).then(response => this.setDbUser(response));
        let localUser = JSON.parse(localStorage.getItem('localUser'));
        this.user.name = localUser.name;
        this.user.email = localUser.email;
      }
    }
  },
  beforeMount(){
    this.checkExistingUser();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@charset "utf-8";
@import url(http://weloveiconfonts.com/api/?family=fontawesome);

[class*="fontawesome-"]:before {
    font-family: 'FontAwesome', sans-serif;
}

input {
    border: none;
    font-family: 'Open Sans', Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5em;
    padding: 0;
    -webkit-appearance: none;
}

p {
    line-height: 1.5em;
}

after {
    clear: both;
}

#logincontainer {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -150px 0 0 -150px;
    width: 330px !important;
    height: 300px !important;
}

#logincontainer form {
    margin: auto;
    padding: 22px 22px 22px 22px;
    width: 100%;
    border-radius: 5px;
    background: #282e33;
    border-top: 3px solid #434a52;
    border-bottom: 3px solid #434a52;
}

#logincontainer form span {
    background-color: #363b41;
    border-radius: 3px 0px 0px 3px;
    border-right: 3px solid #434a52;
    color: #606468;
    display: block;
    float: left;
    line-height: 50px;
    text-align: center;
    width: 50px;
    height: 50px;
}

#logincontainer form input[type="email"] {
    background-color: #3b4148;
    border-radius: 0px 3px 3px 0px;
    color: #a9a9a9;
    margin-bottom: 1em;
    padding: 0 16px;
    width: 235px;
    height: 50px;
}

#logincontainer form input[type="text"] {
    background-color: #3b4148;
    border-radius: 0px 3px 3px 0px;
    color: #a9a9a9;
    margin-bottom: 1em;
    padding: 0 16px;
    width: 235px;
    height: 50px;
}


#logincontainer form input[type="password"] {
    background-color: #3b4148;
    border-radius: 0px 3px 3px 0px;
    color: #a9a9a9;
    margin-bottom: 1em;
    padding: 0 16px;
    width: 235px;
    height: 50px;
}

.BtnSubmit {
    background: #b5cd60;
    border: 0;
    width: 100%;
    height: 40px;
    border-radius: 3px;
    color: white;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
    text-align: center;
}

.BtnSubmit:hover {
    background: #16aa56;
}

.emailError {
    width: 70% !important;
    color: red !important;
    margin-bottom: 1em;
    height: 50px;
}
</style>
