import { useEffect, useState } from "react";
import "./App.css";
import axiosConfig from "./services/axiosConfig";
import GoogleOneTapLogin from "react-google-one-tap-login";
import useFirebaseAuth from "./helpers/hooks/useFirebaseAuth";
import auth from "./helpers/firebaseConfig";
import { login, logout, setUser } from "./features/userSlice";
import Router from "./routes/index";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home";
import { showAlert } from "./features/modalSlice";
import Alerts from "./components/Alert/Alert.jsx";
import Admin from "./pages/Admin";

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
        console.log("userAuth", userAuth);

        dispatch(showAlert({ msg: "Successful", type: "success" }));

        dispatch(
          login({
            name: userAuth.displayName,
            uid: userAuth.uid,
            email: userAuth.email,
            photoURL: userAuth.photoURL,
          })
        );
        const fetchUserData = async () => {
          const {data} = await axiosConfig.post('/users', { "uid": userAuth.uid, "name": userAuth.displayName, "email": userAuth.email });
          console.log(data)
          if(data){
            dispatch(setUser({
              history: data.history,
              level: data.level,
              currentBook: data.curBookID,
              isAdmin: data.isAdmin,
              currentBookName: data.currentBookName
            }))
          }
        };
        fetchUserData();
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div>
      {user.user ? (
        <Router />
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
        </div>
      )}
      <Alerts />
    </div>
  );
}

export default App;
