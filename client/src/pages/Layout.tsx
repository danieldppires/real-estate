import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
	return (
		<div className="h-screen flex flex-col md:max-w-[740px] lg:max-w-[1000px] xl:max-w-[1280px] ml-auto mr-auto px-5">
			<Navbar />

			<div className="flex-1">
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
