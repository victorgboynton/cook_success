import connectToDatabase from "@/mongodb";

export default async (req, res) => {
  if (req.method === "POST") {
    const { db } = await connectToDatabase();

    const recipe = {
      name: req.body.name,
      instructions: req.body.instructions,
      ingredients: req.body.ingredients,
      author: req.body.author,
      pictures: req.body.pictures,
    };

    const result = await db.collection("recipes").insertOne(recipe);

    res.json(result);
  } else {
    res.status(400).send("Only POST requests are excepted");
  }
};
