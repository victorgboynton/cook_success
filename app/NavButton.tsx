import Link from "next/link";
export function NavButton({ children, linkTarget }: any) {
	return (
		<button className="hover:bg-green-500/50 rounded p-1 font-semibold">
			<Link href={linkTarget}>{children}</Link>
		</button>
	);
}
