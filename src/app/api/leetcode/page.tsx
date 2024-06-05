import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { query } from "../../../utils/db";

interface SubmissionCalendar {
  //brackets are used to define the typing of an index of an object
  [date: string]: number;
}

// username and LeetCode username pulled from state
const userID: number = 1;
const leetCodeUsername: string = "numb3r5";

export default async function leetcode(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    console.log("* Entering leetcode API function");

    // Returns submission calendar with accepted submission count by date
    const result = await fetch(
      `https://alfa-leetcode-api.onrender.com/${leetCodeUsername}/calendar`
    );

    const parsedResult = await result.json();
    console.log(
      " - Leet Code Submission Calendar API parsed response: ",
      parsedResult
    );

    const submissionObj: SubmissionCalendar = JSON.parse(
      parsedResult.submissionCalendar
    );
    console.log(
      " - Leet Code Submission Calendar object of {dates: count} : ",
      submissionObj
    );

    for (const date in submissionObj) {
      console.log(" - date: ", date);
      const count: number = submissionObj[date];
      console.log(" - count: ", count);
      const upsertQuery = `
        INSERT INTO leetCodeSubmissions (user_id, submission_date, accepted_submissions)
        VALUES ($1, $2, $3)
        ON CONFLICT (user_id, submission_date)
        DO UPDATE SET
          accepted_submissions = EXCLUDED.accepted_submissions;
      `;

      await query(upsertQuery, [userID, date, count]);
    }
  } catch (error) {
    console.error("Leetcode API Error", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch data from the LeetCode API",
    });
  }
}
