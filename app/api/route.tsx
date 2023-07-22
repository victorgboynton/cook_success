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
	instructions: string[];
	ingredients: string[];
	author: string;
	picture: string;
}

export default async function CreateRecipe(req: Request, res: Response) {
	if (req.method === "POST") {
		const data = req.body;
		const client = await MongoClient.connect(
			"mongodb+srv://vjboynton:bearandbear12@cluster0.jglicws.mongodb.net/?retryWrites=true&w=majority"
		);
		const db = client.db();
		const test = db.collection("test");
		const result = await test.insertOne<Recipe>(data);
		console.log(result);
		client.close();
	}
}
