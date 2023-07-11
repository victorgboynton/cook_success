import Image from "next/image";
import { Navbar } from "./Navbar";

export default function Home() {
	return (
		<div className="">
			<div className="flex text-6xl bg-green-200 font-bitter font-bold text-center lg:mt-10 justify-center items-center mx-auto p-8 ">
				<h1>
					<i>
						<u>Never</u>
					</i>{" "}
					have left over ingredients again
				</h1>
			</div>
			<div className="flex text-5xl font-bitter border-2 bg-green-200 font-semibold border-black max-w-3xl rounded text-center justify-center items-center  mx-auto sm:mt-8">
				<h2>Ingredient of the Week!</h2>
			</div>
		</div>
	);
}
