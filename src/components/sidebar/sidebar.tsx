import { SidebarItem } from "./sidebarItem";
import { SidebarSeparator } from "./sidebarSeparator";
import { SidebarSubitem } from "./sidebarSubitem";
import data from "@/data.json";

export const Sidebar = ({
	setSearch,
}: {
	setSearch: (value: string) => void;
}) => {
	const tags = Array.from(data.styles, (style) => style["tags"]);
	const uniqueTags = Array.from(new Set(tags.flat()));

	return (
		<div className=" absolute top-[73px] left-0 w-52 h-[calc(100vh-73px)] bg-white shadow-lg z-10 select-none overflow-hidden">
			<div className=" w-full h-full flex flex-col gap-1 p-2 px-3">
				<SidebarItem title="스타일 별">
					{data.styles.map((style, i) => (
						<SidebarSubitem
							key={i}
							title={style["title"]}
							setSearch={setSearch}
						/>
					))}
				</SidebarItem>
				<SidebarSeparator />
				<SidebarItem title="두상 별">
					{uniqueTags.map((tag, i) => (
						<SidebarSubitem
							key={i}
							title={tag}
							setSearch={setSearch}
						/>
					))}
				</SidebarItem>
			</div>
		</div>
	);
};
