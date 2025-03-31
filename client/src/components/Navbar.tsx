import { useState } from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu.png";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav className="flex justify-between items-center h-25 lg:gap-12 xl:gap-16">
			<div className="flex-3 flex items-center gap-4">
				<a href="/">
					<div className="flex items-center font-bold text-xl gap-2.5">
						<img src={logo} alt="" className="w-7" />
						<span className="md:hidden lg:block">FindMyHome</span>
					</div>
				</a>
				<a
					href="/"
					className="hidden md:block hover:underline hover:underline-offset-4"
				>
					Home
				</a>
				<a
					href=""
					className="hidden md:block hover:underline hover:underline-offset-4"
				>
					About
				</a>
				<a
					href=""
					className="hidden md:block hover:underline hover:underline-offset-4"
				>
					Contact
				</a>
				<a
					href=""
					className="hidden md:block hover:underline hover:underline-offset-4"
				>
					Agents
				</a>
			</div>

			<div className="md:flex-3 lg:flex-2 flex justify-end items-center h-full lg:bg-stone-100">
				<a
					href="/login"
					className="hidden md:block py-3 px-8 m-5 hover:bg-stone-400"
				>
					Sign In
				</a>
				<a
					href=""
					className="hidden md:block bg-amber-300 py-3 px-8 m-5 hover:bg-amber-400"
				>
					Sign Up
				</a>

				<div className="md:hidden z-10">
					<img
						src={menu}
						alt=""
						className="w-9 h-9 cursor-pointer"
						onClick={() => setOpen((prev) => !prev)}
					/>
				</div>

				<div
					className={`md:hidden absolute flex flex-col justify-center items-center gap-9 text-2xl 
						bg-black text-white h-screen w-1/2 top-0 
						transition-all ease-in-out duration-500 ${open ? "right-0" : "-right-1/2"}`}
				>
					<a href="/">Home</a>
					<a href="">About</a>
					<a href="">Contact</a>
					<a href="">Agents</a>
					<a href="/login">Sign In</a>
					<a href="">Sign Up</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
