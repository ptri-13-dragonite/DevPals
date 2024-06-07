import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    console.log("* Entering leetcode API Most Recent function");

    // username and LeetCode username pulled from state
    const userID: number = 1;
    const leetCodeUsername: string = "numb3r5";

    // Returns submission calendar with accepted submission count by date
    const result = await fetch(
      `https://alfa-leetcode-api.onrender.com/userProfile/${leetCodeUsername}`
    );

    //typescript can infer the type from the reponse to avoid declaring
    const parsedResult = await result.json();

    const {
      totalSolved,
      totalQuestions,
      easySolved,
      totalEasy,
      mediumSolved,
      totalMedium,
      hardSolved,
      totalHard,
      ranking,
      recentSubmissions,
    }: {
      totalSolved: number;
      totalQuestions: number;
      easySolved: number;
      totalEasy: number;
      mediumSolved: number;
      totalMedium: number;
      hardSolved: number;
      totalHard: number;
      ranking: number;
      recentSubmissions: Array<{
        title: string;
        titleSlug: string;
        timestamp: string;
        statusDisplay: string;
        lang: string;
        __typename: string;
      }>;
    } = parsedResult;

    const recentSubmission = recentSubmissions[0];
    const recentSubmissionDate = new Date(recentSubmission.timestamp * 1000);
    recentSubmission.timestamp = recentSubmissionDate;

    return NextResponse.json(
      {
        success: true,
        message: "Leetcode User Metrics successfully",
        data: {
          totalSolved,
          totalQuestions,
          easySolved,
          totalEasy,
          mediumSolved,
          totalMedium,
          hardSolved,
          totalHard,
          ranking,
          recentSubmission,
        },
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
