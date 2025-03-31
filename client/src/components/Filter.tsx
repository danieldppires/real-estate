import search from "../assets/search.png";

const Filter = () => {
	return (
		<div className="mb-8">
			<h2 className="font-light text-2xl mb-3">
				Search results for <b>London</b>
			</h2>

			<div className="flex flex-col mb-3">
				<label htmlFor="city" className="text-xs">
					Location
				</label>
				<input
					type="text"
					name="city"
					id="city"
					placeholder="City Location"
					className="border border-stone-300 p-2 text-sm"
				/>
			</div>

			<div className="flex gap-3">
				<div className="flex flex-col flex-1">
					<label htmlFor="type" className="text-xs">
						Type
					</label>
					<select
						name="type"
						id="type"
						className="w-full border border-stone-300 p-2 rounded text-sm"
					>
						<option value="">Any</option>
						<option value="Buy">Buy</option>
						<option value="Rent">Rent</option>
					</select>
				</div>

				<div className="flex flex-col flex-1">
					<label htmlFor="property" className="text-xs">
						Property
					</label>
					<select
						name="property"
						id="property"
						className="w-full border border-stone-300 p-2 rounded text-sm"
					>
						<option value="">Any</option>
						<option value="Apartment">Apartment</option>
						<option value="House">House</option>
						<option value="Condo">Condo</option>
						<option value="Land">Land</option>
					</select>
				</div>

				<div className="flex flex-col flex-1">
					<label htmlFor="minPrice" className="text-xs">
						Min Price
					</label>
					<input
						name="minPrice"
						id="minPrice"
						type="number"
						className="w-full border border-stone-300 p-2 rounded text-sm"
						placeholder="Any"
					/>
				</div>

				<div className="flex flex-col flex-1">
					<label htmlFor="maxPrice" className="text-xs">
						Max Price
					</label>
					<input
						name="maxPrice"
						id="maxPrice"
						type="number"
						className="w-full border border-stone-300 p-2 rounded text-sm"
						placeholder="Any"
					/>
				</div>

				<div className="flex flex-col flex-1">
					<label htmlFor="bedroom" className="text-xs">
						Bedroom
					</label>
					<input
						name="bedroom"
						id="bedroom"
						type="number"
						className="w-full border border-stone-300 p-2 rounded text-sm"
						placeholder="Any"
					/>
				</div>

				<button
					className="bg-amber-300 min-w-15 flex justify-center items-center cursor-pointer
				hover:bg-amber-400 rounded"
				>
					<img src={search} alt="" className="w-5" />
				</button>
			</div>
		</div>
	);
};

export default Filter;
