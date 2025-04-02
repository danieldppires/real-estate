import { results } from "../lib/data";
import ResultItem from "./ResultItem";

const List = () => {
	return (
		<div>
			{results.map((item) => (
				<ResultItem result={item} key={item.id} />
			))}
		</div>
	);
};

export default List;
