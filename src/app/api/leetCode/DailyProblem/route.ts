import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    console.log("* Entering leetcode API Daily Problem function");

    // Returns submission calendar with accepted submission count by date
    const result = await fetch(`https://alfa-leetcode-api.onrender.com/daily`);

    //typescript can infer the type from the reponse to avoid declaring
    const parsedResult = await result.json();

    const {
      questionTitle,
      questionLink,
      difficulty,
      topicTags,
    }: {
      questionTitle: string;
      questionLink: string;
      difficulty: string;
      topicTags: Array<{
        name: string;
        slug: string;
        translatedName: string | null;
      }>;
    } = parsedResult;
    const tags: Array<string> = topicTags.map((tag) => tag.name);

    return NextResponse.json(
      {
        success: true,
        message: "Leetcode Daily Problem fetched successfully",
        data: { questionTitle, questionLink, difficulty, tags },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Leetcode API Error", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch the LeetCode Daily Problem",
      },
      { status: 200 }
    );
  }
}
