import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface CardProps {
	title: string;
	description: string;
	image: StaticImport;
}

export const Card = ({ title, description, image }: CardProps) => {
	return (
		<div className=" w-52 h-72 flex flex-col bg-gray-100 rounded-xl shadow-xl">
			<Image src={image} alt={title} className=" rounded-t-xl" />
			<div className=" p-2 flex flex-col gap-1">
				<span>{title}</span>
				<span>{description}</span>
			</div>
		</div>
	);
};
