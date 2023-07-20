import { MongoClient } from "mongodb";
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
	"mongodb+srv://vjboynton:bearandbear12@cluster0.jglicws.mongodb.net/?retryWrites=true&w=majority";
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
		await client.connect();
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
