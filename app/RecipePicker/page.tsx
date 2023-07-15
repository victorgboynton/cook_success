"use client";
import React from "react";
import { SearchIngredient } from "../SearchIngredient";

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
						<SearchIngredient>Search</SearchIngredient>
					</form>
				</div>
			</div>
		</div>
	);
}
