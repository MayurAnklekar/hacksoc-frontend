import React from 'react'
import "./profilecard.css";
import {useDispatch, useSelector} from "react-redux";
import useFirebaseAuth from "../../helpers/hooks/useFirebaseAuth";


const Profile = () => {
    const dispatch = useDispatch();
    const { signOutFromApp } = useFirebaseAuth();
    const {user, currentBook, currentBookName} = useSelector((state) => state.user);
    console.log("Profile", user.photoURL)
  return (
    <section className="profilecard gradient-border">
        <header>
            <form>
            <div className="flex justify-center content-center">
            <img
              // src={user?.preview || dp}
              src={""+user.photoURL+""}
              alt="profile_image"
              className="profilecard__dp roundimage "
            />
          </div>
            </form>
            <h1>{user.name}</h1>
        </header>
        <article>
        <div className="profilecard__info">
          <h3>Email: </h3>
          <h3>{user.email}</h3>
        </div>
        <div className="profilecard__info">
          <h3>Currently Reading: </h3>
          <h3>{currentBook===''?(<>-</>):(<>{currentBookName}</>)}</h3>
        </div>
      </article>
      <div className="btn-group">
          <button
            className="font-semibold bg-slate-600"
            onClick={signOutFromApp}
          >
            Logout
          </button>
          {currentBook===''?(<></>):(<button
            className="font-semibold bg-slate-600"
            onClick={signOutFromApp}
          >
            Logout
          </button>)}
        </div>
    </section>
  )
}

export default Profile