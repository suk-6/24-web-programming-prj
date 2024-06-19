export const SearchBar = () => {
	return (
		<div className=" w-80 h-full flex items-center overflow-hidden">
			<input
				type="text"
				className=" w-full h-12 p-4 rounded-3xl border border-gray-400 bg-gray-100 text-black outline-none"
				placeholder="검색어를 입력하세요"
			/>
		</div>
	);
};
