<template>
  <div id="containerMain">
    <div id="logo"></div>

    <b-form class="form1">
      <label for="text-email"></label>

      <b-form-input
        id="text-email"
        v-model="form.email"
        type="email"
        placeholder="Enter email"
      ></b-form-input>
      <br />

      <label for="text-password">Password</label>
      <b-form-input
        v-model="form.password"
        type="password"
        id="text-password"
        placeholder="Enter password"
        aria-describedby="password-help-block"
      ></b-form-input>
      <br />

      <div>
        <b-form-checkbox v-model="form.remember" switch
          >Remember me</b-form-checkbox
        >
      </div>
    </b-form>

    <div class="btnLogin">
      <b-button type="submit" variant="success" @click="userLogin()"
        >Login</b-button
      >
      <b-button type="reset" variant="danger">Forgot Password ? </b-button>
    </div>
    <br />
    <div class="socialMedia">
      <div class="social1"></div>
      <div class="social1"></div>
      <div class="social1"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
        remember: null,
      },
    }
  },
  methods: {
    userLogin() {
      if ((this.form.email !== '') & (this.form.password !== '')) {
        this.$store.dispatch('auth/userLoginA', { ...this.form })
      } else {
        alert('Email ve Password boş bırakmayınız')
      }
    },
  },
}
</script>

<style scoped>
#logo {
  height: 100px;
  width: 100px;
  background-color: wheat;
  border-radius: 20px;
  border: 1px solid white;
  margin: auto;
  margin-top: 40px;
}

#containerMain {
  height: 600px;
  width: 500px;
  border: 1px solid red;
  border-radius: 20px;
  margin: auto;
  margin-top: 100px;
  background-color: lightskyblue;
}

.form1 {
  color: white;
  margin: 5px;
  margin-top: 50px;
}

.social1 {
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: lightslategray;
  display: inline-block;
  margin-left: 20px;
}

.btnLogin {
  margin-top: 40px;
}

@media only screen and (min-width: 960px) {
  #containerMain {
    width: 500px;
  }

  .btnLogin {
    margin-left: 150px;
  }

  .socialMedia {
    margin-left: 150px;
  }
}

@media only screen and (min-width: 769px) and (max-width: 959px) {
  #containerMain {
    width: 400px;
  }

  .btnLogin {
    margin-left: 100px;
  }

  .socialMedia {
    margin-left: 100px;
  }
}

@media only screen and (max-width: 768px) {
  #containerMain {
    width: 300px;
  }

  .btnLogin {
    margin-left: 50px;
  }

  .socialMedia {
    margin-left: 50px;
  }
}
</style>