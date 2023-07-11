export function NavButton({ children }: any) {
	return (
		<button className="hover:bg-green-500/50 rounded p-1 font-semibold">
			{children}
		</button>
	);
}
