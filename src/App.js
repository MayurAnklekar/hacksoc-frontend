import { useEffect, useState } from "react";
import "./App.css";
import axiosConfig from "./services/axiosConfig";
import GoogleOneTapLogin from "react-google-one-tap-login";
import useFirebaseAuth from "./helpers/hooks/useFirebaseAuth";
import auth from "./helpers/firebaseConfig";
import { login, logout } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [data, setData] = useState("");
  const { oneTapSignInWithGoogle, signOutFromApp } = useFirebaseAuth();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);

  // useEffect(()=>{
  //   const fetchData = async()=>{
  //     const Data = await axiosConfig.get('/users');
  //     console.log(Data)
  //     setData(Data.data);
  //   }
  //   fetchData();
  // },[data])

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div>
      {user.user ? (
        <div>
          <h1>Welcome</h1>
          <button
            onClick={signOutFromApp}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <span>Please sign in</span>
          <GoogleOneTapLogin
            onError={(error) => console.log(error)}
            onSuccess={(response) => {
              console.log(response);
            }}
            googleAccountConfigs={{
              client_id:
                "545219740592-oavp1dsf27cv1ulh0f8s402bkrndouus.apps.googleusercontent.com",
              callback: oneTapSignInWithGoogle,
            }}
          />
          ,
        </div>
      )}
    </div>
  );
}

export default App;
