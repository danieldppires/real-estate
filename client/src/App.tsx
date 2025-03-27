import Navbar from "./components/Navbar";
import HomePage from "./pages/homePage";

const App = () => {
	return (
		<div className="h-screen flex flex-col md:max-w-[740px] lg:max-w-[1000px] xl:max-w-[1280px] ml-auto mr-auto px-5">
			<Navbar />

			<div className="flex-1">
				<HomePage />
			</div>
		</div>
	);
};

export default App;
