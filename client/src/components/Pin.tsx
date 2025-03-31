import { Marker, Popup } from "react-leaflet";
import { ResultType } from "./ResultItem";
import { Link } from "react-router-dom";

interface Props {
	item: ResultType;
}

const Pin = ({ item }: Props) => {
	return (
		<Marker position={[item.latitude, item.longitude]}>
			<Popup>
				<div className="flex gap-4 w-max">
					<img
						src={item.img}
						alt=""
						className="w-16 h-12 object-cover rounded-sm"
					/>
					<div className="flex flex-col justify-between max-w-48">
						<Link to={`/${item.id}`}>{item.title}</Link>
						<span>{item.bedroom} bedroom</span>
						<b>$ {item.price}</b>
					</div>
				</div>
			</Popup>
		</Marker>
	);
};

export default Pin;
