import styled, { css } from "styled-components";
import { SidebarItem } from "./sidebarItem";
import { SidebarSeparator } from "./sidebarSeparator";

export const Sidebar = () => {
	return (
		<div className=" absolute top-[5rem] left-0 w-52 h-[calc(100vh-5rem)] bg-white">
			<div className=" w-full h-full flex flex-col gap-1 p-4">
				{[...Array(3)].map((_, i) => (
					<SidebarItem key={i} title="Home" />
				))}
				<SidebarSeparator />
				{[...Array(3)].map((_, i) => (
					<SidebarItem key={i} title="Home" />
				))}
				<SidebarSeparator />
				{[...Array(5)].map((_, i) => (
					<SidebarItem key={i} title="Home" />
				))}
			</div>
		</div>
	);
};
