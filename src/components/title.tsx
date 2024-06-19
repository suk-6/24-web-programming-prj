"use client";

import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Sidebar } from "./sidebar/sidebar";
export const Title = () => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className=" w-full h-16 bg-gray-200 flex flex-row">
			<CiMenuBurger
				className=" h-full ml-3"
				size={40}
				onClick={() => setIsOpen(!isOpen)}
			/>
			{isOpen && <Sidebar />}
		</div>
	);
};
