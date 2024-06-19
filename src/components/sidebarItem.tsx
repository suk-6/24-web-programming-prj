interface SidebarItemProps {
	title: string;
}

export const SidebarItem = ({ title }: SidebarItemProps) => {
	return <div className="p-3 hover:bg-slate-300 rounded-lg">{title}</div>;
};
