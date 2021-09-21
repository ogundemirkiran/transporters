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
      ></b-form-input>
      <br />

      <label for="text-rePassword">Again Password </label>
      <b-form-input
        v-model="form.rePassword"
        type="password"
        id="text-rePassword"
        placeholder="Enter again password"
      ></b-form-input>
      <br />
      <div>
        <b-form-radio name="radio-size" value="1" v-model="form.whoUser"
          >Servis Araç Sahibi</b-form-radio
        >
        <b-form-radio name="radio-size" value="2" v-model="form.whoUser"
          >Firma Sahibi</b-form-radio
        >
        <b-form-radio name="radio-size" value="3" v-model="form.whoUser"
          >Yolcu</b-form-radio
        >
      </div>
      <br />

      <div>
        <b-form-checkbox v-model="form.contract"
          >Accept the Contract</b-form-checkbox
        >
      </div>
    </b-form>

    <b-button
      class="btnRegister"
      type="submit"
      variant="success"
      @click="addUserRegister()"
      >Register</b-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
        rePassword: '',
        whoUser: '',
        contract: '',
      },
    }
  },
  methods: {
    addUserRegister() {
      if (
        (this.form.email !== '') &
        (this.form.password !== '') &
        (this.form.rePassword !== '') &
        (this.form.whoUser !== '') &
        (this.form.contract == true)
      ) {
        if (this.form.password === this.form.rePassword) {
          this.$store.dispatch('auth/userRegisterA', { ...this.form })
          this.$router.push({ path: '/login' })
        } else {
          alert('Şifreniz Uyuşmuyor!!')
        }
      } else {
        alert('Bilgileri Eksiksiz Giriniz!!')
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
  background-color: lightsteelblue;
  height: 700px;
  border: 1px solid red;
  border-radius: 20px;
  margin: auto;
  margin-top: 80px;
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

.btnRegister {
  margin-top: 40px;
}

@media only screen and (min-width: 960px) {
  #containerMain {
    width: 500px;
  }

  .btnRegister {
    margin-left: 200px;
  }
}

@media only screen and (min-width: 769px) and (max-width: 959px) {
  #containerMain {
    width: 400px;
  }

  .btnRegister {
    margin-left: 150px;
  }
}

@media only screen and (max-width: 768px) {
  #containerMain {
    width: 300px;
  }

  .btnRegister {
    margin-left: 100px;
  }
}
</style>