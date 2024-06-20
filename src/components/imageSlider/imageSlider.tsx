"use client";
import data from "@/data.json";
import { ImageSliderButton } from "./imageSliderButton";
import { useEffect, useState } from "react";

export const ImageSlider = () => {
	const images = Array.from(data.styles, (style) => style["image"]);
	const [currentImage, setCurrentImage] = useState<number>(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage((prev) => (prev + 1) % images.length);
		}, 3000);
		return () => clearInterval(interval);
	}, [currentImage, images.length]);

	return (
		<div className="m-3 w-full h-full bg-gray-200 flex overflow-hidden relative border border-gray-200 rounded-xl shadow-xl">
			<div
				style={{
					backgroundImage: `url(${images[currentImage]})`,
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
