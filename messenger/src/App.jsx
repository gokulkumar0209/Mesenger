import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Messenger from "./pages/Messenger";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/auth";
import { AuthContextProvider } from "./context/AuthContextProvider";

function App() {
	return (
		<>
			<AuthContextProvider>
				<NavBar></NavBar>
				<Routes>
					<Route path="/" element={<Messenger />}></Route>
					<Route path="/signup" element={<Signup />}></Route>
					<Route path="/login" element={<Login />}></Route>
				</Routes>
			</AuthContextProvider>
		</>
	);
}

export default App;
