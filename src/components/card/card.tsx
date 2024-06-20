import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface CardProps {
	title: string;
	image: StaticImport | string;
}

export const Card = ({ title, image }: CardProps) => {
	return (
		<div className=" w-fit h-72 flex flex-col bg-gray-100 rounded-xl shadow-xl">
			<Image
				src={image}
				width={1000}
				height={1000}
				alt={title}
				className=" w-full h-[87%] rounded-t-xl bg-cover bg-center"
			/>
			<div className=" w-full h-full flex justify-center items-center text-xl">
				{title}
			</div>
		</div>
	);
};
