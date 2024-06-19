"use client";

import Example1 from "@/images/example1.png";
import Example2 from "@/images/example2.png";
import { ImageSliderButton } from "./imageSliderButton";
import { useState } from "react";

export const ImageSlider = () => {
	const images = [Example1, Example2];
	const [currentImage, setCurrentImage] = useState<number>(0);

	return (
		<div className="m-3 w-full h-1/2 bg-gray-200 flex overflow-hidden relative border border-gray-200 rounded-xl shadow-xl">
			<div
				style={{
					backgroundImage: `url(${images[currentImage].src})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					width: "100%",
					height: "100%",
				}}
			/>
			<ImageSliderButton
				imageLength={images.length}
				currentImage={currentImage}
				setCurrentImage={setCurrentImage}
			/>
		</div>
	);
};
