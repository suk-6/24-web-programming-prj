import styled, { css } from "styled-components";
import { SidebarItem } from "./sidebarItem";

export const Sidebar = () => {
	return (
		<div className=" absolute top-16 left-0 w-52 h-full bg-gray-100">
			<div className=" w-full h-full flex flex-col gap-2 p-4">
				{[...Array(10)].map((i) => (
					<SidebarItem key={i} title="Home" />
				))}
			</div>
		</div>
	);
};
