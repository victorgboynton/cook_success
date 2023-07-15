"use client";
import React from "react";
import { useState } from "react";
import { ingredients } from "./RecipePicker/ingredients";

export function SearchIngredient() {
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
