import connectToDatabase from "@/mongodbs";

export async function POST(req, res) {
  if (req.method === "POST") {
    const { db } = await connectToDatabase();

    const recipe = {
      name: req.body.name,
      instructions: req.body.instructions,
      ingredients: req.body.ingredients,
      author: req.body.author,
      pictures: req.body.pictures,
    };

    const result = await db.collection("Recipes").insertOne(recipe);
    console.log("Added");

    //res.json(result);
  } else {
    res.status(400).send("Only POST requests are excepted");
  }
}
