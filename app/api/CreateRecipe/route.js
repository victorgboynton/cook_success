import connectToDatabase from "@/mongodbs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req, res) {
  if (req.method === "POST") {
    const { db } = await connectToDatabase();

    const { name, instructions, ingredients, author, pictures } = req.body;
    /*   name: "test",
      instructions: req.body.instructions,
      ingredients: req.body.ingredients,
      author: req.body.author,
      pictures: req.body.pictures,
    }; 
    console.log(req.body);*/

    const result = await db
      .collection("Recipes")
      .insertOne({ name, instructions, ingredients, author, pictures });
    console.log(req.body.name + "Fuck me man");

    return NextResponse.json(result);
  } else {
    return res.status(400).send("Only POST requests are excepted");
  }
}
