import Image from "next/image";
import downRightIcon from "@/icons/downRightIcon.svg";

interface SidebarItemProps {
	title: string;
	setSearch: (value: string) => void;
}

export const SidebarSubitem = ({ title, setSearch }: SidebarItemProps) => {
	return (
		<div className=" flex flex-row ml-3">
			<Image src={downRightIcon} alt="guide" className=" h-3.5" />
			<div
				className=" ml-1 w-full hover:bg-gray-200 rounded-lg px-1.5"
				onClick={() => setSearch(title)}
			>
				{title}
			</div>
		</div>
	);
};
