import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center border-4 max-w-3xl border-black">
        <h1>Never have left over ingredients again!</h1>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex px-2 items-center bg-green-300">
      <div className="">
        <NavButton>Home</NavButton>
      </div>
      <h1 className=" items-center text-2xl mx-auto border-4 border-black">
        CookSuccess
      </h1>
      <div className=" gap-2">
        <NavButton>Saved Recipes</NavButton>
        <NavButton>Login</NavButton>
      </div>
    </div>
  );
}

function NavButton({ children }: any) {
  return (
    <button className="hover:bg-green-500/50 rounded p-1">{children}</button>
  );
}
