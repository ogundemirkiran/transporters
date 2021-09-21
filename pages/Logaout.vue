<template>
  <div></div>
</template>

<script>
export default {
  middleware: ['auth'],
  methods: {
    userLogout() {
      var data = confirm('Çıkmak İstediğinize Emin Misiniz?')
      console.log(data)
      if (data == true) {
        this.$store.dispatch('auth/userLogoutA')
      } else {
        this.$router.push({ path: '/' })
      }
    },
  },
  created() {
    this.userLogout()
  },
}
</script>

<style>
</style>