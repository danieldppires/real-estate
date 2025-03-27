import { useState } from "react";
import search from "../assets/search.png";

enum QueryType {
	BUY = "Buy",
	RENT = "Rent",
}

interface Query {
	type: QueryType;
	location: string;
	minPrice: number;
	maxPrice: number;
}

const SearchBar = () => {
	const [query, setQuery] = useState<Query>({
		type: QueryType.BUY,
		location: "",
		minPrice: 0,
		maxPrice: 0,
	});

	const switchType = (val: QueryType) => {
		setQuery((prev) => ({ ...prev, type: val }));
	};

	return (
		<div className="flex flex-col my-8">
			<div className="flex text-xs">
				<div
					onClick={() => switchType(QueryType.BUY)}
					className={`py-3 px-8 border-l border-t border-stone-300 rounded-tl-lg cursor-pointer ${
						query.type === QueryType.BUY ? "bg-black text-white" : ""
					} hover:bg-stone-700 hover:text-white`}
				>
					Buy
				</div>
				<div
					onClick={() => switchType(QueryType.RENT)}
					className={`py-3 px-8 border-t border-r border-stone-300 rounded-tr-lg cursor-pointer ${
						query.type === QueryType.RENT ? "bg-black text-white" : ""
					} hover:bg-stone-700 hover:text-white`}
				>
					Rent
				</div>
			</div>

			<div className="sm:border sm:border-stone-300 flex flex-col sm:flex-row">
				<input
					type="text"
					name="location"
					className="sm:text-sm py-4 px-2 outline-0 flex-1 border sm:border-0 border-stone-300 mb-2 sm:mb-0"
					placeholder="City Location"
				/>
				<input
					type="number"
					name="minPrice"
					min={0}
					max={10000000}
					className="sm:text-sm py-4 px-2 outline-0 flex-1 border sm:border-0 border-stone-300 mb-2 sm:mb-0"
					placeholder="Min Price"
				/>
				<input
					type="number"
					name="maxPrice"
					min={0}
					max={10000000}
					className="sm:text-sm py-4 px-2 outline-0 flex-1 border sm:border-0 border-stone-300 mb-2 sm:mb-0"
					placeholder="Max Price"
				/>
				<button
					className="bg-amber-300 text-white flex justify-center items-center border-l border-stone-300 
					px-4 hover:bg-amber-400 cursor-pointer min-w-14 py-3 sm:py-auto"
				>
					<img src={search} alt="" className="w-6 hidden sm:block" />
					<span className="sm:hidden text-black">Search</span>
				</button>
			</div>
		</div>
	);
};

export default SearchBar;
