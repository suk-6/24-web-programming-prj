import { FaSearch } from "react-icons/fa";

export const SearchBar = () => {
	return (
		<div className=" w-80 h-12 rounded-3xl border border-gray-400 bg-gray-50 flex flex-row justify-center overflow-hidden">
			<input
				type="text"
				className=" w-9/12 h-full ml-5 mr-auto bg-gray-50 text-black outline-none"
				placeholder="검색어를 입력하세요"
			/>
			<FaSearch className="h-full mr-4 ml-auto" size={20} />
		</div>
	);
};
