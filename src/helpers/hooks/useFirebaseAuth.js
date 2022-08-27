import {
  getAuth,
  signOut,
  GoogleAuthProvider,
  signInWithCredential
} from 'firebase/auth'


const useFirebaseAuth = () => {


  const oneTapSignInWithGoogle = (response) => {
    
    if (response) {
      console.log("inside response", response)
      const cred = GoogleAuthProvider.credential(response.credential)
      console.log("cred", cred)
  
      // Sign in with credential from the Google user.
      return signInWithCredential(getAuth(), cred);
    }
  }

  const signOutFromApp = () => {
    let auth = getAuth()

    if (auth.currentUser)
      signOut(auth)
        .then(() => {
          
        })
        .catch((error) => {
          console.log(error)
        })
  }

  return {
    getAuth,
    signOutFromApp,
    oneTapSignInWithGoogle
  }
}

export default useFirebaseAuth
