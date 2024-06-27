"use client";

import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Sidebar } from "../sidebar/sidebar";
import { SearchBar } from "./searchBar";
export const Title = ({
	search,
	setSearch,
}: {
	search: string;
	setSearch: (value: string) => void;
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className=" w-full h-20 bg-white border-b-2 flex flex-row gap-4 items-center p-0.5">
			{isOpen && <Sidebar setSearch={setSearch} />}
			<div className=" w-12 h-12 ml-3 rounded-lg hover:bg-gray-200">
				<CiMenuBurger
					className=" w-full h-full p-2"
					size={35}
					onClick={() => setIsOpen(!isOpen)}
				/>
			</div>
			<SearchBar search={search} setSearch={setSearch} />
		</div>
	);
};
