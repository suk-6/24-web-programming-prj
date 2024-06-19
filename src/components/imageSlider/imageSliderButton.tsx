import {
	MdOutlineKeyboardArrowLeft,
	MdOutlineKeyboardArrowRight,
} from "react-icons/md";

interface ImageSliderButtonProps {
	imageLength: number;
	currentImage: number;
	setCurrentImage: (value: number) => void;
}

export const ImageSliderButton = ({
	imageLength,
	currentImage,
	setCurrentImage,
}: ImageSliderButtonProps) => {
	const backwardImage = () => {
		if (currentImage === 0) {
			setCurrentImage(imageLength - 1);
		} else {
			setCurrentImage(currentImage - 1);
		}
	};

	const forwardImage = () => {
		if (currentImage === imageLength - 1) {
			setCurrentImage(0);
		} else {
			setCurrentImage(currentImage + 1);
		}
	};

	return (
		<div className="absolute top-1/2 transform -translate-y-1/2 w-full flex items-center">
			<MdOutlineKeyboardArrowLeft
				size={30}
				className="ml-1 mr-auto"
				onClick={backwardImage}
			/>
			<MdOutlineKeyboardArrowRight
				size={30}
				className="mr-1 ml-auto"
				onClick={forwardImage}
			/>
		</div>
	);
};
