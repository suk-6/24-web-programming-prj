import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

export const SearchBar = ({
	search,
	setSearch,
}: {
	search: string;
	setSearch: (value: string) => void;
}) => {
	const [searchValue, setSearchValue] = useState<string>("");
	return (
		<div className=" w-80 h-12 rounded-3xl border border-gray-400 bg-gray-50 flex flex-row justify-center overflow-hidden">
			<input
				type="text"
				className=" w-9/12 h-full ml-5 mr-auto bg-gray-50 text-black outline-none"
				placeholder="검색어를 입력하세요"
				value={searchValue}
				onChange={(e) => {
					setSearchValue(e.currentTarget.value);
					if (e.currentTarget.value === "") setSearch("");
				}}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						setSearch(e.currentTarget.value);
					}
				}}
			/>
			<IoIosSearch className="h-full mr-4 ml-auto" size={25} />
		</div>
	);
};
