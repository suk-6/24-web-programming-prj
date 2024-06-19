import Example1 from "@/images/example1.png";
import Example2 from "@/images/example2.png";
import Image from "next/image";
import {
	MdOutlineKeyboardArrowRight,
	MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

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
			<div className="absolute top-1/2 transform -translate-y-1/2 w-full flex items-center">
				<MdOutlineKeyboardArrowLeft
					size={30}
					className="ml-1 mr-auto"
				/>
				<MdOutlineKeyboardArrowRight
					size={30}
					className="mr-1 ml-auto"
				/>
			</div>
		</div>
	);
};
