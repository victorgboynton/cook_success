import { MongoClient, ServerApiVersion } from "mongodb";
import { Instrument_Sans } from "next/font/google";

// Replace the uri string with your MongoDB deployment's connection string.
const uri = process.env.MONGODB_URI;
if (typeof uri !== "string") {
	throw new Error(
		"MONGODB_URI environment variable is not set or not a string"
	);
}
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});
interface Recipe {
	name: string;
	instructions: string[];
	ingredients: string[];
	author: string;
	picture: string;
}

export default async function CreateRecipe(req: Request, res: Response) {
	if (typeof uri !== "string") {
		throw new Error(
			"MONGODB_URI environment variable is not set or not a string"
		);
	}
	if (req.method === "POST") {
		const data = req.body;
		const client = await MongoClient.connect(uri);
		const db = client.db();
		const test = db.collection("test");
		const result = await test.insertOne(data);
		console.log(result);
		client.close();
	}
}
