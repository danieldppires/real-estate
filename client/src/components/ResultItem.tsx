import pin from "../assets/pin.png";
import bed from "../assets/bed.png";
import bath from "../assets/bath.png";
import save from "../assets/save.png";
import chat from "../assets/chat.png";
import { Link } from "react-router-dom";

export interface ResultType {
	id: number;
	title: string;
	images: string[];
	bedroom: number;
	bathroom: number;
	price: number;
	address: string;
	latitude: number;
	longitude: number;
}

interface Props {
	result: ResultType;
}

const ResultItem = ({ result }: Props) => {
	return (
		<div className="flex gap-3 mb-12">
			<div className="flex-2">
				<Link to={`/${result.id}`}>
					<img
						src={result.images[0] || ""}
						alt=""
						className="aspect-3/2 object-cover rounded-xl"
					/>
				</Link>
			</div>

			<div className="flex flex-3 flex-col justify-between gap-1">
				<Link to={`/${result.id}`}>
					<h3 className="text-lg font-bold">{result.title}</h3>
				</Link>

				<div className="flex gap-1.5 items-center">
					<img src={pin} alt="" className="w-3.5 h-3.5" />
					<span className="text-stone-500 text-xs">{result.address}</span>
				</div>

				<span className="bg-amber-200 px-1 text-lg w-max">${result.price}</span>

				<div className="flex justify-between">
					<div className="flex gap-3">
						<div className="flex items-center gap-1 text-xs bg-stone-100 p-1">
							<img src={bed} alt="" className="w-3.5 h-3.5" />
							{result.bedroom} bedroom
						</div>

						<div className="flex items-center gap-1 text-xs bg-stone-100 p-1">
							<img src={bath} alt="" className="w-3.5 h-3.5" />
							{result.bathroom} bathroom
						</div>
					</div>

					<div className="flex gap-3">
						<div className="p-1 rounded-md border border-stone-300 flex items-center justify-center hover:bg-stone-300 cursor-pointer">
							<img src={save} alt="" className="w-3.5 h-3.5" />
						</div>
						<div className="p-1 rounded-md border border-stone-300 flex items-center justify-center hover:bg-stone-300 cursor-pointer">
							<img src={chat} alt="" className="w-3.5 h-3.5" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResultItem;
