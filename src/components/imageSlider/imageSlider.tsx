import Example1 from "@/images/example1.png";
import Example2 from "@/images/example2.png";
import { ImageSliderButton } from "./imageSliderButton";

export const ImageSlider = () => {
	return (
		<div className="m-5 w-full h-1/2 bg-gray-200 flex overflow-hidden relative border border-gray-200 rounded-xl shadow-xl">
			<div
				style={{
					backgroundImage: `url(${Example1.src})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					width: "100%",
					height: "100%",
				}}
			/>
			<ImageSliderButton />
		</div>
	);
};
