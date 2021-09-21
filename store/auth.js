import db from '@/services/firebase'
import jwtDecode from 'jwt-decode'
import Cookies from 'js-cookie'

const state = {
  userRegisterData: [],
  mailOfLoginData: '',
  userWhoData: '',
}

const getters = {
  getUserWho(state) {
    console.log(state.userWhoData)
    return state.userWhoData
  },
}

const mutations = {
  userRegisterM(state, payload) {
    console.log(payload)
    state.userRegisterData = payload
  },

  setMailOfLogin(state, payload) {
    state.mailOfLoginData = payload
  },

  setUserWho(state, payload) {
    state.userWhoData = payload
  },

  setRemoveMail(state) {
    state.userWhoData = ''
  },
}

const actions = {
  async userRegisterA(commit, payload) {
    return await db
      .database()
      .app.auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        db.database()
          .app.firestore()
          .collection('users')
          .doc(payload.email)
          .set(payload)

        alert('Kayıt Başarılı')
      })
      .catch((error) => {
        var errorCode = error.code
        var errorMessage = error.message
        console.log(error)
        // ..
      })
  },
  async userLoginA(vuexContext, payload) {
    return await db
      .database()
      .app.auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then((res) => {
        res.user.getIdToken().then((token) => {
          vuexContext.dispatch('setCookie', token)
          console.log(token)
        })

        db.database()
          .app.firestore()
          .collection('users')
          .doc(`${res.user.email}`)
          .get()
          .then((doc) => {
            if (doc.exists) {
              console.log('Document data:', doc.data())
              vuexContext.commit('setUserWho', doc.data())
              this.$router.push({ path: '/' })
            } else {
              // doc.data() will be undefined in this case
              console.log('No such document!')
              this.$router.push({ path: '/login' })
            }
          })
          .catch((error) => {
            console.log('Error getting document:', error)
            this.$router.push({ path: '/login' })
          })
      })
      .catch((error) => {
        alert('Mail yada Şifreniz Uyumsuz')
        this.$router.push({ path: '/login' })
      })
  },

  setCookie(vuexContext, token) {
    console.log(token)
    var decoded = jwtDecode(token)
    let currentDate = Math.round(new Date().getTime() / 1000)
    let expiresIn = +decoded.exp //3600
    Cookies.set('authKey', token)
    Cookies.set('expiresIn', expiresIn)
    localStorage.setItem('authKey', token)
    localStorage.setItem('expiresIn', expiresIn)
    //vuexContext.commit("setAuthKey", token);
    console.log(decoded)
  },

  async userLogoutA(vuexContext, payload) {
    console.log(payload)

    return await db
      .database()
      .app.auth()
      .signOut()
      .then((res) => {
        localStorage.removeItem('authKey')
        localStorage.removeItem('expiresIn')
        Cookies.remove('authKey')
        Cookies.remove('expiresIn')

        this.$router.push({ path: '/login' })

        vuexContext.commit('setRemoveMail')
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error)
      })
  },

  async userControl(vuexContext, payload) {
    vuexContext.commit('setUserWho', payload)
    console.log(payload)
  },
}

export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions,
}
