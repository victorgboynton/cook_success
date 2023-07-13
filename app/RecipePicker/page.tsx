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
            <input type="text" placeholder="Enter ingredient here" />
          </form>
        </div>
      </div>
    </div>
  );
}
