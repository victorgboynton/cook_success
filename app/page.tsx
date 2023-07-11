import Image from "next/image";
const Foods = [
	{ id: "1", name: "Artichoke dip" },
	{ id: "2", name: "Spinach fettuccini" },
	{ id: "3", name: "Spinach Ravioli" },
];

export default function Home() {
	return (
		<div className="">
			<div className="flex text-6xl bg-blue-200 font-bitter font-bold text-center lg:mt-10 justify-center items-center mx-auto p-8 ">
				<h1>
					<i>
						<u>Never</u>
					</i>{" "}
					have left over ingredients again
				</h1>
			</div>
			<div className="flex text-5xl font-bitter border-2 bg-blue-200 font-semibold border-black max-w-3xl rounded text-center justify-center items-center  mx-auto sm:mt-8">
				<h2>Ingredient of the Week!</h2>
			</div>
			<div className="bg-green-200 border-4 border-black mt-3">
				<div className="flex text-6xl font-semibold justify-center mt-3">
					<u>
						<i>Spinach</i>
					</u>
				</div>
				<div>
					<List listItems={Foods} />
				</div>
			</div>
		</div>
	);
}

function Food({ foodObject }: any) {
	return (
		<div className="flex flex-col text-center mb-8 bg-blue-200">
			<div className="border-2 border-black">
				<p className="border-b-2 text-xl font-bitter border-black">
					{foodObject.name}
				</p>
				<div className="relative">
					<Image
						src="/spinach_ravioli.png"
						alt="Placeholder"
						height={200}
						width={200}
					/>
				</div>
			</div>
		</div>
	);
}

function List({ listItems }: any) {
	return (
		<div className="flex justify-between lg:mx-80 mt-20">
			{listItems.map((item: any) => (
				<Food foodObject={item} key={item.id} />
			))}
		</div>
	);
}
