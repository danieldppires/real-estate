import pin from "../assets/pin.png";
import chat from "../assets/chat.png";
import save from "../assets/save.png";
import utilities from "../assets/utility.png";
import pet from "../assets/pet.png";
import fees from "../assets/fee.png";
import size from "../assets/size.png";
import bed from "../assets/bed.png";
import bath from "../assets/bath.png";
import school from "../assets/school.png";
import { singlePostData, userData } from "../lib/data";
import Slider from "../components/Slider";
import Map from "../components/Map";

export interface Post {
	id: number;
	title: string;
	price: number;
	images: string[];
	bedroom: number;
	bathroom: number;
	size: number;
	latitude: number;
	longitude: number;
	city: string;
	address: string;
	school: string;
	bus: string;
	restaurant: string;
	description: string;
}

const SinglePage = () => {
	const item = singlePostData;
	const user = userData;

	return (
		<div className="flex h-full flex-col sm:flex-row mt-8 sm:mt-0 mb-12">
			<div className="flex-3 overflow-y-auto [&::-webkit-scrollbar]:hidden">
				<div className="flex flex-col justify-start pr-12 mb-12">
					<Slider images={item.images} />

					<div>
						<div className="flex justify-between mb-12">
							<div className="flex flex-col justify-between">
								<h1 className="text-3xl">{item.title}</h1>
								<p className="text-stone-400 text-xs flex gap-1 items-center">
									<img src={pin} alt="" className="w-3.5 h-3.5" />
									{item.address}
								</p>
								<span className="text-lg font-light bg-amber-200 w-max p-1">
									$ {item.price}
								</span>
							</div>

							<div className="flex flex-col items-center gap-2 bg-amber-100 py-6 px-10 rounded-lg">
								<img
									src={user.img}
									alt=""
									className="w-10 h-10 object-cover rounded-full"
								/>
								<span className="text-sm font-semibold">{user.name}</span>
							</div>
						</div>

						<div className="text-sm text-stone-600">{item.description}</div>
					</div>
				</div>
			</div>

			<div className="flex-2 bg-stone-100 h-[calc(100vh-100px)] mt-12 sm:mt-0 pt-4 sm:pt-0 overflow-y-auto [&::-webkit-scrollbar]:hidden">
				<div className="flex flex-col gap-4 px-5">
					<h4 className="font-semibold">General</h4>
					<div className="bg-white py-4 px-2 rounded-lg flex flex-col">
						<div className="flex flex-col gap-4">
							<div className="flex gap-2 items-center">
								<img src={utilities} alt="" className="w-5 h-5" />
								<div className="leading-0">
									<h5 className="text-sm font-semibold">Utilities</h5>
									<span className="text-xs">Renter is responsible</span>
								</div>
							</div>

							<div className="flex gap-2 items-center">
								<img src={pet} alt="" className="w-5 h-5" />
								<div className="leading-0">
									<h5 className="text-sm font-semibold">Pet Policy</h5>
									<span className="text-xs">Pets Allowed</span>
								</div>
							</div>

							<div className="flex gap-2 items-center">
								<img src={fees} alt="" className="w-5 h-5" />
								<div className="leading-0">
									<h5 className="text-sm font-semibold">Property Fees</h5>
									<span className="text-xs">
										Must have 3x the rent in total household income
									</span>
								</div>
							</div>
						</div>
					</div>

					<h4 className="font-semibold">Room Sizes</h4>
					<div className="flex justify-between gap-4 text-sm">
						<div className="bg-white p-2 rounded-lg flex gap-2">
							<img src={size} alt="" className="w-5 h-5" />
							80sqm ({item.size}sqft)
						</div>

						<div className="bg-white p-2 rounded-lg flex gap-2">
							<img src={bed} alt="" className="w-5 h-5" />
							{item.bedroom} bed
						</div>

						<div className="bg-white p-2 rounded-lg flex gap-2">
							<img src={bath} alt="" className="w-5 h-5" />
							{item.bathroom} bathroom
						</div>
					</div>

					<h4 className="font-semibold">Nearby Places</h4>
					<div className="bg-white py-4 px-2 rounded-lg flex justify-between">
						<div className="flex gap-2 items-center">
							<img src={school} alt="" className="w-5 h-5" />
							<div className="leading-0">
								<h5 className="text-sm font-semibold">School</h5>
								<span className="text-xs">{item.school}</span>
							</div>
						</div>

						<div className="flex gap-2 items-center">
							<img src={pet} alt="" className="w-5 h-5" />
							<div className="leading-0">
								<h5 className="text-sm font-semibold">Bus Stop</h5>
								<span className="text-xs">{item.bus}</span>
							</div>
						</div>

						<div className="flex gap-2 items-center">
							<img src={fees} alt="" className="w-5 h-5" />
							<div className="leading-0">
								<h5 className="text-sm font-semibold">Restaurant</h5>
								<span className="text-xs">{item.restaurant}</span>
							</div>
						</div>
					</div>

					<h4 className="font-semibold">Location</h4>
					<div className="w-full h-48">
						<Map items={[item]} />
					</div>

					<div className="flex justify-between mb-12">
						<button
							className="bg-white border border-stone-300 text-sm flex gap-2 items-center 
						justify-center py-3 px-8 hover:bg-amber-200 cursor-pointer"
						>
							<img src={chat} alt="" className="w-4" />
							Send a Message
						</button>
						<button
							className="bg-white border border-stone-300 text-sm flex gap-2 items-center 
						justify-center py-3 px-8 hover:bg-amber-200 cursor-pointer"
						>
							<img src={save} alt="" className="w-4" />
							Save the Place
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SinglePage;
