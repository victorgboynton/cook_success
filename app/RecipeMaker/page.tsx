import { useState } from "react";
import { Run } from "../mongo";
import { SearchIngredient } from "../SearchIngredient";
export default function RecipeMaker() {
	const [name, setName] = useState("");
	const [instructions, setInstructions] = useState("");
	const [ingredients, setIngredient] = useState([]);
	const [author, setAuthor] = useState("");
	const [picture, setPicture] = useState("");

	function handleIngredientAddition(e: string) {}

	return (
		<div>
			<div>
				<form>
					<input
						type="text"
						placeholder="Recipe Name"
						onChange={(e) => {
							setName(e.target.value);
						}}
					></input>
					<input
						type="text"
						placeholder="Instructions"
						onChange={(e) => {
							setInstructions(e.target.value);
						}}
					></input>
					<SearchIngredient />
				</form>
			</div>
		</div>
	);
}
