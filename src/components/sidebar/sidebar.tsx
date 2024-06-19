import styled, { css } from "styled-components";
import { SidebarItem } from "./sidebarItem";

export const Sidebar = () => {
	return (
		<div className=" absolute top-[5rem] left-0 w-52 h-[calc(100vh-5rem)] bg-white">
			<div className=" w-full h-full flex flex-col gap-2 p-4">
				{[...Array(10)].map((_, i) => (
					<SidebarItem key={i} title="Home" />
				))}
			</div>
		</div>
	);
};
