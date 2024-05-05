import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
	return (
		<>
			<div className="flex justify-between bg-green-500">
				<div className="ml-6">
					<Link to="/">
						<h1>Messenger</h1>
					</Link>
				</div>
				<div className=" flex gap-2">
					<Link to="/login">
						<h2>Login</h2>
					</Link>
					<Link className="mr-6" to="/signup">
						<h2>Signup</h2>
					</Link>
				</div>
			</div>
		</>
	);
}

export default NavBar;
