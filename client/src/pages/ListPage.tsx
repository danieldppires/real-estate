import Filter from "../components/Filter";
import Map from "../components/Map";
import ResultItem from "../components/ResultItem";
import { results } from "../lib/data";

const ListPage = () => {
	return (
		<div className="flex h-full mt-8 sm:mt-0">
			<div className="flex-3 overflow-y-auto [&::-webkit-scrollbar]:hidden">
				<div className="flex flex-col justify-start pr-12">
					<Filter />

					<div>
						{results.map((res) => (
							<ResultItem key={res.id} result={res} />
						))}
					</div>
				</div>
			</div>

			<div className="flex-2 bg-stone-100 hidden lg:block h-full">
				<Map items={results} />
			</div>
		</div>
	);
};

export default ListPage;
