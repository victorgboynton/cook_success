import { NavButton } from "./NavButton";

export function Navbar() {
	return (
		<div className="grid grid-cols-3 px-2 items-center bg-green-300">
			<div className="">
				<NavButton>Home</NavButton>
			</div>
			<h1 className=" items-center text-3xl mx-auto font-pacifico font-extrabold">
				CookSuccess
			</h1>
			<div className=" flex justify-end gap-2">
				<NavButton>Saved Recipes</NavButton>
				<NavButton>Login</NavButton>
			</div>
		</div>
	);
}
