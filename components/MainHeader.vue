/* <template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">
        <nuxt-link to="/" tag="a">Anasayfa</nuxt-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-5">
          <b-nav-item v-if="getUserWho.whoUser == '1'" href="#"
            ><nuxt-link to="/is" tag="a">Aracıma İş Bul</nuxt-link>
            <nuxt-link to="/saveCar" tag="a"
              >Aracımı Boş Olarak Kaydet</nuxt-link
            >
          </b-nav-item>
          <b-nav-item v-if="getUserWho.whoUser == '2'" href="#"
            ><nuxt-link to="/servis" tag="a">İşime Araç Bul</nuxt-link>
            <nuxt-link to="/saveJob" tag="a">Güzergah Oluştur</nuxt-link>
            <nuxt-link to="/addEmployee" tag="a">Personel Ekle</nuxt-link>
          </b-nav-item>
          <b-nav-item v-if="getUserWho.whoUser == '3'" href="#"
            ><nuxt-link to="/driverjob" tag="a">Yolcuyum</nuxt-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item v-if="!getUserWho.email" href="#">
              <nuxt-link to="/login">Login</nuxt-link></b-dropdown-item
            >
            <b-dropdown-item v-if="!getUserWho.email" href="#">
              <nuxt-link to="/register">Kayıt Ol</nuxt-link></b-dropdown-item
            >
            <b-dropdown-item v-if="getUserWho.email" href="#">
              <nuxt-link to="/logaout">Logaout</nuxt-link></b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Cookies from 'js-cookie'
import db from '@/services/firebase'

export default {
  middleware: ['auth'],
  computed: {
    ...mapGetters({ getUserWho: 'auth/getUserWho' }),
  },
  created() {
    if (Cookies.get('authKey') !== '') {
      db.database()
        .app.auth()
        .onAuthStateChanged((user) => {
          console.log(user.Aa)
          console.log(Cookies.get('authKey'))
          if (user) {
            if (user.Aa == Cookies.get('authKey')) {
              db.database()
                .app.firestore()
                .collection('users')
                .doc(`${user.email}`)
                .get()
                .then((doc) => {
                  if (doc.exists) {
                    this.$store.dispatch('auth/userControl', { ...doc.data() })

                    //this.$router.push({ path: '/' })
                  } else {
                    console.log('buras 11')
                    //this.$router.push({ path: '/login' })
                  }
                })
                .catch((error) => {
                  console.log(
                    ' burası errr  Error getting document  22222:',
                    error
                  )
                  //this.$router.push({ path: '/login' })
                })

              // ...
            } else {
              // this.$router.push({ path: '/login' })
              console.log('idler eşit değiş')

              // User is signed out
              // ...
            }
          } else {
            console.log('burada 999')
            this.$router.push({ path: '/login' })
          }
        })
    } else {
      console.log('id boş')
    }
  },
}
</script>

<style>
a {
  color: black;
}
a:hover {
  color: black;
  opacity: 0.9;
}
</style>
 