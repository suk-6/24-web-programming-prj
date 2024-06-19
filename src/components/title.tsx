"use client";

import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Sidebar } from "./sidebar/sidebar";
import { SearchBar } from "./searchBar";
export const Title = () => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className=" w-full h-20 bg-white border-b-2 flex flex-row gap-5 items-center">
			{isOpen && <Sidebar />}
			<CiMenuBurger
				className=" h-full ml-4"
				size={40}
				onClick={() => setIsOpen(!isOpen)}
			/>
			<SearchBar />
		</div>
	);
};
