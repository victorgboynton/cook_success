import { NavButton } from "./NavButton";

export function Navbar() {
  return (
    <div className="grid grid-cols-3 px-2 items-center bg-emerald-300">
      <div className="">
        <NavButton linkTarget="/">Home</NavButton>
      </div>
      <h1 className=" items-center text-3xl mx-auto font-pacifico font-extrabold">
        <NavButton linkTarget="/">CookSuccess</NavButton>
      </h1>
      <div className=" flex justify-end gap-2">
        <NavButton linkTarget="/RecipeMaker">Recipe Maker</NavButton>
        <NavButton linkTarget="/Login">Saved Recipes</NavButton>
        <NavButton linkTarget="/Login">Login</NavButton>
      </div>
    </div>
  );
}
