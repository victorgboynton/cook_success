import { MongoClient } from "mongodb";
// Replace the uri string with your MongoDB deployment's connection string.
const uri = process.env.MONGODB_URI;
if (typeof uri !== "string") {
	throw new Error(
		"MONGODB_URI environment variable is not set or not a string"
	);
}
const client = new MongoClient(uri);
interface Recipe {
	name: string;
	instructions: [];
	ingredients: string[];
	author: string;
	picture: string;
}
export async function Run({
	name,
	instructions,
	ingredients,
	author,
	picture,
}: any) {
	try {
		const test = client.db("test");
		// Specifying a Schema is optional, but it enables type hints on
		// finds and inserts
		const recipe = test.collection<Recipe>("recipe");
		const result = await recipe.insertOne({
			name: name,
			instructions: instructions,
			ingredients: ingredients,
			author: author,
			picture: picture,
		});
		console.log(`A document was inserted with the _id: ${result.insertedId}`);
	} finally {
		await client.close();
	}
}
Run({}).catch(console.dir);
