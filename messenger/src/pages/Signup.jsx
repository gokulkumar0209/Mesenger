import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";
// import { signUpWithEmailAndPassword } from "firebase/auth";
function Signup() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { user, signUp } = UserAuth();
	const navigate = useNavigate();

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		console.log(email, password);
		try {
			await signUp(email, password);
			navigate("/");
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div>
			<>
				<div className="relative w-full h-screen text-white">
					<div className="absolute inset-0 bg-black opacity-70"></div>
					<div
						className="absolute left-1/2 top-1/2 transform 
        -translate-x-1/2 -translate-y-1/2  bg-black bg-opacity-40 p-10 rounded-lg
         border-white  w-96 h-96"
					>
						<div className="flex items-center justify-center w-32 ">
							<h1 className=" capitalize text-2xl font-bold mb-2 ">Sign Up</h1>
						</div>
						<form onSubmit={handleFormSubmit}>
							<div className=" text-center">
								<input
									className=" bg-black  border-2  mb-2 w-64 h-8 rounded "
									type="email"
									placeholder="Email"
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								></input>
								<input
									className="mb-2 w-64 h-8 rounded bg-black border-2"
									type="password"
									placeholder="Password"
									value={password}
									onChange={(e) => {
										setPassword(e.target.value);
									}}
								></input>
							</div>
							<div className="text-center">
								<button className=" bg-green-500 w-64 h-8 rounded mb-2">
									Submit
								</button>
							</div>
						</form>
						<div className=" flex items-center ml-6">
							<p className="">Already available?</p>
							<Link to="/login">
								<p className="ml-2">Login</p>
							</Link>
						</div>
					</div>
				</div>
			</>
		</div>
	);
}

export default Signup;
