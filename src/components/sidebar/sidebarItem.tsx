interface SidebarItemProps {
	title: string;
}

export const SidebarItem = ({ title }: SidebarItemProps) => {
	return <div className="p-3 hover:bg-gray-200 rounded-lg">{title}</div>;
};
