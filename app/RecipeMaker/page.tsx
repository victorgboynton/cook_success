"use client";

import { StrictMode, useRef, useState } from "react";

import { ingredients } from "../RecipePicker/ingredients";
export default function RecipeMaker() {
  const [name, setName] = useState("");
  const [instructions, setInstructions] = useState("");
  const [ingredient, setIngredient] = useState([]);
  const [author, setAuthor] = useState("");
  const [picture, setPicture] = useState("");

  return (
    <div className="bg-gray-500">
      <div className="z-1 bg-cover relative">
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
          <div className="flex flex-row">
            <div className="">
              <AddIngredient
                ingredient={ingredient}
                setIngredient={setIngredient}
              >
                Add
              </AddIngredient>
            </div>
            <div className="bg-white overflow-auto max-h-40">
              {ingredient.map((ingredient, index) => (
                <div key={index}>{ingredient}</div>
              ))}
            </div>
          </div>
          <button
            className=""
            onSubmit={(e) =>
              handleSubmit(e, {
                name,
                instructions,
                ingredients,
                author,
                picture,
              })
            }
          >
            Submit
          </button>
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
    setIngredient((ingredient: any) => [...ingredient, e]);
    console.log(ingredient);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter ingredient here"
          onChange={onChange}
        />
        <span
          onClick={() => onAdd([value])}
          className="bg-emerald-700 p-1 rounded hover:cursor-pointer"
        >
          {children}
        </span>
      </div>
      <div className="flex flex-col  absolute w-fit bg-white">
        {ingredients
          .filter((item) => {
            const searchTerm = value.toLowerCase();
            const lowerName = item.toLowerCase();
            return searchTerm && lowerName.startsWith(searchTerm);
          })
          .map((ingredients, index) => (
            <div
              className="hover:cursor-pointer z-10 w-56 hover:bg-blue-200"
              key={index}
              onClick={onAdd}
            >
              {ingredients}
            </div>
          ))}
      </div>
    </div>
  );
}

function handleSubmit(
  e: any,
  { name, instructions, ingredients, author, picture }: any
) {
  e.preventDefault();
  fetch("./api/createRecipe.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: { name },
      instructions: { instructions },
      ingredients: { ingredients },
      author: { author },
      pictures: { picture },
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });
}
