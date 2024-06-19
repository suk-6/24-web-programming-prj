import {
	MdOutlineKeyboardArrowLeft,
	MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export const ImageSliderButton = () => {
	return (
		<div className="absolute top-1/2 transform -translate-y-1/2 w-full flex items-center">
			<MdOutlineKeyboardArrowLeft size={30} className="ml-1 mr-auto" />
			<MdOutlineKeyboardArrowRight size={30} className="mr-1 ml-auto" />
		</div>
	);
};
