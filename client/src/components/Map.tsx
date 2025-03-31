import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pin from "./Pin";
import { ResultType } from "./ResultItem";

interface Props {
	items: ResultType[];
}

const Map = ({ items }: Props) => {
	return (
		<div className="w-full h-full">
			<MapContainer
				center={[52.4797, -1.902669]}
				zoom={7}
				scrollWheelZoom={true}
				className="w-full h-full rounded-lg"
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>

				{items.map((result, index) => (
					<Pin item={result} key={index} />
				))}
			</MapContainer>
		</div>
	);
};

export default Map;
