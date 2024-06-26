interface SidebarItemProps {
	title: string;
	children?: React.ReactNode;
}

export const SidebarItem = ({ title, children }: SidebarItemProps) => {
	return (
		<div className=" flex flex-col my-0.5">
			<div className="p-1.5 rounded-lg">{title}</div>
			<div className=" flex flex-col gap-2">{children}</div>
		</div>
	);
};
