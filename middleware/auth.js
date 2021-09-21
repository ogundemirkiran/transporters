import db from '@/services/firebase'

export default async function ({ redirect }) {
  console.log('middleware')
  await db
    .database()
    .app.auth()
    .onAuthStateChanged((user) => {
      console.log(user)
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid
        console.log(uid)

        // ...
      } else {
        console.log('middleware else')
        return redirect('/login')
        // User is signed out
        // ...
      }
    })
}
