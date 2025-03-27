import pin from "../assets/pin.png";
import bed from "../assets/bed.png";
import bath from "../assets/bath.png";
import save from "../assets/save.png";
import chat from "../assets/chat.png";

export interface ResultType {
	id: number;
	title: string;
	address: string;
	price: number;
	bedrooms: number;
	bathrooms: number;
	img: string;
}

interface Props {
	result: ResultType;
}

const ResultItem = ({ result }: Props) => {
	return (
		<div className="flex gap-3 mb-8">
			<img
				src=""
				alt=""
				className="flex-2 aspect-3/2 object-cover rounded-xl"
			/>

			<div className="flex flex-3 flex-col justify-between gap-1">
				<h3 className="text-lg font-bold">{result.title}</h3>

				<div className="flex gap-1.5 items-center">
					<img src={pin} alt="" className="w-3.5 h-3.5" />
					<span className="text-stone-500 text-xs">{result.address}</span>
				</div>

				<div>
					<span className="bg-amber-200 p-1 text-lg">${result.price}</span>
				</div>

				<div className="flex justify-between">
					<div className="flex gap-3">
						<div className="flex items-center gap-1 text-sm bg-stone-100 p-1">
							<img src={bed} alt="" className="w-3.5 h-3.5" />
							{result.bedrooms} bedroom
						</div>

						<div className="flex items-center gap-1 text-sm bg-stone-100 p-1">
							<img src={bed} alt="" className="w-3.5 h-3.5" />
							{result.bathrooms} bathroom
						</div>
					</div>

					<div className="flex gap-3">
						<div className="p-1 rounded-md border border-stone-300 flex items-center justify-center">
							<img src={save} alt="" className="w-3.5 h-3.5" />
						</div>
						<div className="p-1 rounded-md border border-stone-300 flex items-center justify-center">
							<img src={chat} alt="" className="w-3.5 h-3.5" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResultItem;
