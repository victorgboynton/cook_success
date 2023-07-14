"use client";
import React from "react";
import { useState } from "react";

const ingredients = [
	"Apple",
	"Avocado",
	"Banana",
	"Basil",
	"Chicken",
	"Chili",
	"Dill",
	"Dates",
	"Eggs",
	"Eggplant",
	"Fennel",
	"Figs",
	"Garlic",
	"Ginger",
	"Honey",
	"Ham",
	"Ice Cream",
	"Icing Sugar",
	"Jackfruit",
	"Jalapeno",
	"Kale",
	"Kiwi",
	"Lemon",
	"Lamb",
	"Mango",
	"Mushrooms",
	"Nutmeg",
	"Noodles",
	"Orange",
	"Oregano",
	"Pineapple",
	"Pepper",
	"Quinoa",
	"Quince",
	"Rice",
	"Raspberries",
	"Salmon",
	"Strawberries",
	"Tomatoes",
	"Thyme",
	"Udon Noodles",
	"Ugli Fruit",
	"Vanilla",
	"Veal",
	"Walnuts",
	"Watermelon",
	"Xanthan Gum",
	"Xigua (Watermelon)",
	"Yogurt",
	"Yellowfin Tuna",
	"Zucchini",
	"Zest (Lemon)",
];
export default function RecipePicker() {
	return (
		<div className="">
			<div className="grid grid-cols-2 mx-60">
				<div className="bg-slate-500 h-screen">
					<div>Hello</div>
				</div>
				<div className="bg-green-500 h-screen">
					<h1>World</h1>
					<form>
						<input type="text" placeholder="time allotted"></input>
						<div>
							<span>Are you willing to go shopping?</span>
							<input type="checkbox" />
						</div>
						<SearchIngredient />
					</form>
				</div>
			</div>
		</div>
	);
}

function SearchIngredient() {
	const [value, setValue] = useState("");

	const onChange = (e: any) => {
		setValue(e.target.value);
	};

	const onSearch = (e: any) => {
		console.log("search", e);
	};

	return (
		<div>
			<div>
				<input
					type="text"
					placeholder="Enter ingredient here"
					onChange={onChange}
				/>
				<button
					onClick={() => onSearch(value)}
					className="bg-emerald-700 p-1 rounded"
				>
					Search
				</button>
			</div>
			<div className="flex flex-col max-w-xs bg-white">
				{ingredients
					.filter((item) => {
						const searchTerm = value.toLowerCase();
						const lowerName = item.toLowerCase();
						return searchTerm && lowerName.startsWith(searchTerm);
					})
					.map((ingredients) => (
						<div key="ingredients">{ingredients}</div>
					))}
			</div>
		</div>
	);
}
