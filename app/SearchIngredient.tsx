"use client";
import React from "react";
import { useState } from "react";
import { ingredientsList } from "./RecipePicker/ingredientsList";

export function SearchIngredient({ children }: any) {
  const [value, setValue] = useState("");

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  const onSearch = (searchValue: any) => {
    console.log("search", searchValue);
    setValue("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter ingredient here"
          value={value}
          onChange={onChange}
        />
        <button
          onClick={(e) => {
            e.preventDefault;
            onSearch(value);
          }}
          className="bg-emerald-700 p-1 rounded"
        >
          {children}
        </button>
      </div>
      <div className="flex flex-col max-w-xs bg-white">
        {ingredientsList
          .filter((item) => {
            const searchTerm = value.toLowerCase();
            const lowerName = item.toLowerCase();
            return searchTerm && lowerName.startsWith(searchTerm);
          })
          .map((ingredients, index) => (
            <div
              className="hover:cursor-pointer hover:bg-blue-200"
              key={index}
              onClick={() => onSearch(ingredients)}
            >
              {ingredients}
            </div>
          ))}
      </div>
    </div>
  );
}
