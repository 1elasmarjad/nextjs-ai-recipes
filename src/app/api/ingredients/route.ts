import { type NextRequest, NextResponse } from "next/server";
import { type Ingredient } from "~/types";

export async function GET(
  request: NextRequest,
): Promise<NextResponse<Ingredient[]>> {
  const userInput: string = request.nextUrl.searchParams.get("q") ?? "";

  console.log(userInput);

  // TODO filter ingredients based on user input

  return NextResponse.json([
    { name: "apple", value: "apple" },
    { name: "banana", value: "banana" },
    { name: "carrot", value: "carrot" },
    { name: "date", value: "date" },
  ]);
}
