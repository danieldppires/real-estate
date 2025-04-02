import bg from "../assets/bg.png";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
	return (
		<div className="flex h-full mt-8 sm:mt-0">
			<div className="flex-3 flex flex-col justify-center ">
				<div className="pr-12">
					<h1 className="text-5xl sm:text-6xl font-bold mb-8">
						Find Real Estate & Get Your Dream Place
					</h1>
					<p className="text-stone-500">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab facilis
						veritatis commodi distinctio, magnam dignissimos perferendis sequi
						ad mollitia eum odio saepe quam a officiis molestias eaque placeat,
						culpa voluptate.
					</p>

					<SearchBar />

					<div className="flex">
						<div className="flex flex-col flex-1">
							<span className="text-3xl md:text-4xl font-semibold">16+</span>
							<span className="text-stone-400">Years of Experience</span>
						</div>

						<div className="flex flex-col flex-1">
							<span className="text-3xl md:text-4xl font-semibold">200</span>
							<span className="text-stone-400">Award Gained</span>
						</div>

						<div className="flex flex-col flex-1">
							<span className="text-3xl md:text-4xl font-semibold">1200+</span>
							<span className="text-stone-400">Property Ready</span>
						</div>
					</div>
				</div>
			</div>

			<div className="flex-2 bg-stone-100 hidden lg:block h-[calc(100vh-100px)]">
				<img src={bg} alt="" className="" />
			</div>
		</div>
	);
};

export default HomePage;
