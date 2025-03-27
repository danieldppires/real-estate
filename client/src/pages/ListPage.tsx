import ResultItem, { ResultType } from "../components/ResultItem";

const results: ResultType[] = [
	{
		id: 1,
		title: "A Great Apartment Next to the Beach!",
		address: "456 Park Avenue, London",
		price: 1000,
		bedrooms: 2,
		bathrooms: 1,
		img: "",
	},
	{
		id: 2,
		title: "An Awesome Apartment Near the Park! Almost too good to be true!",
		address: "789 Oxford Street, London",
		price: 1500,
		bedrooms: 3,
		bathrooms: 2,
		img: "",
	},
	{
		id: 3,
		title: "A New Apartment in the City!",
		address: "101 Baker Street, London",
		price: 800,
		bedrooms: 1,
		bathrooms: 1,
		img: "",
	},
];

const ListPage = () => {
	return (
		<div className="flex lg:gap-12 xl:gap-16 mt-8 sm:mt-0">
			<div className="flex-3 flex flex-col justify-start">
				<h2 className="font-light text-2xl">Search results for</h2>

				<div>Filters</div>

				<div>
					{results.map((res) => (
						<ResultItem key={res.id} result={res} />
					))}
				</div>
			</div>

			<div className="flex-2 bg-stone-100 hidden lg:block h-[calc(100vh-100px)]">
				Mapa
			</div>
		</div>
	);
};

export default ListPage;
