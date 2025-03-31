import Filter from "../components/Filter";
import Map from "../components/Map";
import ResultItem from "../components/ResultItem";
import { results } from "../lib/data";

const ListPage = () => {
	return (
		<div className="flex lg:gap-12 xl:gap-16 mt-8 sm:mt-0">
			<div className="flex-3 flex flex-col justify-start">
				<Filter />

				<div>
					{results.map((res) => (
						<ResultItem key={res.id} result={res} />
					))}
				</div>
			</div>

			<div className="flex-2 bg-stone-100 hidden lg:block h-[calc(100vh-100px)]">
				<Map items={results} />
			</div>
		</div>
	);
};

export default ListPage;
