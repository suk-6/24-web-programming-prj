"use client";

import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Sidebar } from "./sidebar/sidebar";
import { SearchBar } from "./searchBar";
export const Title = () => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className=" w-full h-20 bg-white border-b-2 flex flex-row gap-4 items-center">
			{isOpen && <Sidebar />}
			<div className=" w-12 h-12 ml-3 rounded-lg hover:bg-gray-200">
				<CiMenuBurger
					className=" w-full h-full p-2"
					size={35}
					onClick={() => setIsOpen(!isOpen)}
				/>
			</div>
			<SearchBar />
		</div>
	);
};
