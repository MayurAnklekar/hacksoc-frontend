import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../pages/Home";
import Books from "../pages/Books";
// import Appbar from "../components/Appbar/Appbar";
// import Profile from "../pages/Profile/Profile";
// import AllUsers from "../components/AllUsers/AllUsers";
// import Chat from "../pages/Chat/Chat";
// import SinglePost from "../pages/SinglePost/SinglePost";

const Router = () => {
	// const {
	// 	modal: { isSidebarVisible }
	// } = useSelector(state => state);


	return (
		<>
			{/* <div className={isSidebarVisible ? "sidebar visible" : "sidebar"}>
				<AllUsers />
			</div>
			<Appbar /> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/category/:id" element={<Books />} />
				{/* <Route path="/user/:id" element={<Profile />} />
				<Route path="/chat" element={<Chat />} />
        		<Route path="/post/:id" element={<SinglePost />} /> */}
			</Routes>
		</>
	);
};

export default Router;
