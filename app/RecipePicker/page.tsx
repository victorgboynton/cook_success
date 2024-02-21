"use client";
import React, { useState } from "react";
import { SearchIngredient } from "../SearchIngredient";

export default function RecipePicker() {
	const [ingredients, setIngredients] = useState([]);
	const [measurements, setMeasurements] = useState("");
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
						<SearchIngredient
							setIngredients={setIngredients}
							ingredients={ingredients}
						>
							Search
						</SearchIngredient>
						<div>
							{ingredients.map((ingredient, index) => {
								return (
									<div key={index} className="flex flex-row">
										<MeasurementDropdown
											value={measurements}
											setValue={setMeasurements}
										/>
										<p> of </p>
										<span key={index}>{ingredient}</span>
									</div>
								);
							})}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

function MeasurementDropdown({ value, setValue }: any) {
	const handleChange = (e: any) => {
		setValue(() => [...value, e.target.value]);
	};
	return (
		<div>
			<select
				name="measurements"
				id="cookingMeasurements"
				value={value}
				onChange={handleChange}
			>
				<option value="teaspoon">tsp</option>
				<option value="tablespoon">tbsp</option>
				<option value="fluidOunce">fl oz</option>
				<option value="cup">c</option>
				<option value="pint">pt</option>
				<option value="quart">qt</option>
				<option value="gallon">gal</option>
				<option value="milliliter">ml</option>
				<option value="liter">l</option>
				<option value="pound">lb</option>
				<option value="ounce">oz</option>
				<option value="gram">g</option>
				<option value="kilogram">kg</option>
				<option value="pinch">pinch</option>
				<option value="dash">dash</option>
			</select>
		</div>
	);
}
