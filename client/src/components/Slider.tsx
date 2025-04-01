import { useState } from "react";
import arrow from "../assets/arrow.png";

interface Props {
	images: string[];
}

const Slider = ({ images }: Props) => {
	const [imageIndex, setImageIndex] = useState<null | number>(null);

	return (
		<div className="w-full h-88 flex gap-5 mb-12">
			{imageIndex !== null && (
				<div className="absolute z-20 w-screen h-screen top-0 left-0 bg-black flex justify-between items-center">
					<div className="flex-1 flex justify-center items-center">
						<img
							src={arrow}
							alt=""
							className="w-5 sm:w-8 md:w-12 cursor-pointer"
							onClick={() =>
								setImageIndex(
									imageIndex > 0 ? imageIndex - 1 : images.length - 1
								)
							}
						/>
					</div>

					<div className="flex-10">
						<img
							src={images[imageIndex]}
							alt=""
							className="w-full h-full object-cover rounded-lg"
						/>
					</div>

					<div className="flex-1 flex justify-center items-center">
						<img
							src={arrow}
							alt=""
							className="w-5 sm:w-8 md:w-12 rotate-180 cursor-pointer"
							onClick={() =>
								setImageIndex(
									imageIndex < images.length - 1 ? imageIndex + 1 : 0
								)
							}
						/>
					</div>

					<div
						onClick={() => setImageIndex(null)}
						className="absolute top-0 right-0 text-white text-4xl font-bold pt-5 pr-10 cursor-pointer"
					>
						x
					</div>
				</div>
			)}

			<div className="flex-3">
				<img
					src={images[0]}
					alt=""
					className="w-full h-full object-cover rounded-md cursor-pointer"
					onClick={() => setImageIndex(0)}
				/>
			</div>

			<div className="flex-1 flex flex-col justify-between gap-5">
				{images.slice(1).map((image, index) => (
					<img
						src={image}
						alt=""
						key={index}
						className="w-full object-cover rounded-md cursor-pointer h-26"
						onClick={() => setImageIndex(index + 1)}
					/>
				))}
			</div>
		</div>
	);
};

export default Slider;
