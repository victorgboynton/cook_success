import Image from "next/image";
import { Navbar } from "./Navbar";

export default function Home() {
	return (
		<div className="">
			<div className="flex text-6xl bg-green-100 font-dmSerif rounded text-center lg:mt-20 justify-center items-center border-4 mx-auto p-8 max-w-6xl border-black">
				<h1>
					<i>
						<u>Never</u>
					</i>{" "}
					have left over ingredients again
				</h1>
			</div>
			<div className="flex text-5xl font-dmSerif border-2 bg-green-50 border-black max-w-3xl rounded text-center justify-center items-center  mx-auto lg:m-20">
				<h2>Ingredient of the Week!</h2>
			</div>
		</div>
	);
}
