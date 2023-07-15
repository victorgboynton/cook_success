"use client";
import { useState } from "react";
import { Run } from "../mongo";
import { SearchIngredient } from "../SearchIngredient";
import { ingredients } from "../RecipePicker/ingredients";
export default function RecipeMaker() {
	const [name, setName] = useState("");
	const [instructions, setInstructions] = useState("");
	const [ingredient, setIngredient] = useState([]);
	const [author, setAuthor] = useState("");
	const [picture, setPicture] = useState("");

	return (
		<div className="bg-gray-500">
			<div>
				<form>
					<input
						type="text"
						placeholder="Recipe Name"
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
					<input
						type="text"
						placeholder="Instructions"
						onChange={(e) => {
							setInstructions(e.target.value);
						}}
					/>
					<AddIngredient ingredient={ingredient} setIngredient={setIngredient}>
						Add
					</AddIngredient>
				</form>
			</div>
		</div>
	);
}
function AddIngredient({ children, ingredient, setIngredient }: any) {
	const [value, setValue] = useState("");

	const onChange = (e: any) => {
		setValue(e.target.value);
	};

	const onAdd = (e: any) => {
		e.preventDefault();
		setIngredient([...ingredient, e.target.value]);
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
					onClick={() => onAdd(value)}
					className="bg-emerald-700 p-1 rounded"
				>
					{children}
				</button>
			</div>
			<div className="flex flex-col max-w-xs bg-white">
				{ingredients
					.filter((item) => {
						const searchTerm = value.toLowerCase();
						const lowerName = item.toLowerCase();
						return searchTerm && lowerName.startsWith(searchTerm);
					})
					.map((ingredients, index) => (
						<div className="hover:cursor-pointer hover:bg-blue-200" key={index}>
							{ingredients}
						</div>
					))}
			</div>
		</div>
	);
}
