import { MongoClient, ServerApiVersion } from "mongodb";
import { Instrument_Sans } from "next/font/google";

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
	"mongodb+srv://vjboynton:bearandbear12@cluster0.jglicws.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});
interface Recipe {
	name: string;
	instructions: [];
	ingredients: string[];
	author: string;
	picture: string;
}
export const GET = async (req: any, { params }: any) => {
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
	} catch (error) {
		console.log(error);
	} finally {
		await client.close();
	}
};
//Run({}).catch(console.dir);
