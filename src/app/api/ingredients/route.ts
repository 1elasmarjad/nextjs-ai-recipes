import { type ObjectId, type Collection } from "mongodb";
import { type NextRequest, NextResponse } from "next/server";
import { getDB } from "~/db";
import { type Ingredient } from "~/types";

export async function GET(
  request: NextRequest,
): Promise<NextResponse<Ingredient[]>> {
  const userInput: string = request.nextUrl.searchParams.get("q") ?? "";

  const db = await getDB();
  const ingredients: Collection = db.collection("ingredients");

  console.log(userInput);

  const found = (await ingredients
    .aggregate([
      {
        $search: {
          index: "default",
          text: {
            query: userInput,
            path: "name",
            fuzzy: {
              maxEdits: 2,
              prefixLength: 3,
            },
          },
        },
      },
    ])
    .toArray()) as ({ name: string } & { _id: ObjectId })[];

  console.log(found);

  return NextResponse.json([...found.map((ingredient) => ingredient.name)]);
}
