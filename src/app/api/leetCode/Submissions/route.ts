import { NextRequest, NextResponse } from "next/server";
import { query } from "../../../../utils/db";

interface SubmissionCalendar {
  //brackets are used to define the typing of an index of an object
  [date: string]: number;
}

// username and LeetCode username pulled from state
const userID: number = 1;
const leetCodeUsername: string = "numb3r5";

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    console.log("* Entering leetcode API function");

    // Returns submission calendar with accepted submission count by date
    const result = await fetch(
      `https://alfa-leetcode-api.onrender.com/${leetCodeUsername}/calendar`
    );

    const parsedResult = await result.json();

    const submissionObj: SubmissionCalendar = JSON.parse(
      parsedResult.submissionCalendar
    );

    //get the array of dates from the API response
    const dateKeys = Object.keys(submissionObj);

    //find the entries where the any of the dates from the response are already logged in the db
    const existingEntries = await query(
      `
      SELECT submission_date, accepted_submissions 
      FROM leetCodeSubmissions 
      WHERE user_id = $1 AND submission_date = ANY($2::varchar[])
    `,
      [userID, dateKeys]
    );

    //create a Map to easily lookup date and counts for existing entries
    const existingMap: SubmissionCalendar = {};
    existingEntries.rows.forEach(
      (row: { submission_date: string; accepted_submissions: number }) => {
        existingMap[row.submission_date] = row.accepted_submissions;
      }
    );

    const queryParams = [];
    const upsertQueryParams = [];
    let index = 1;

    for (const date in submissionObj) {
      const currCount: number = submissionObj[date];
      const existingCount: number | undefined = existingMap[date];

      if (existingCount === undefined || existingCount !== currCount) {
        upsertQueryParams.push(`($${index++}, $${index++}, $${index++})`);
        queryParams.push(userID, date, currCount);
      }
    }

    const upsertQuery = `
      INSERT INTO leetCodeSubmissions (user_id, submission_date, accepted_submissions)
      VALUES ${upsertQueryParams.join(", ")}
      ON CONFLICT (user_id, submission_date)
      DO UPDATE SET
        accepted_submissions = EXCLUDED.accepted_submissions;
    `;

    let responseMessage = "Leetcode Submission Calendar updated in db.";

    if (upsertQueryParams.length === 0) {
      responseMessage = "No updates needed.";
    } else {
      await query(upsertQuery, queryParams);
    }

    const rolling30Query = `
      SELECT SUM(accepted_submissions) AS rolling30
      FROM leetCodeSubmissions
      WHERE CAST(submission_date AS BIGINT) >= EXTRACT(EPOCH FROM CURRENT_DATE - INTERVAL '30 days');`;

    const prevRolling30Query = `
      SELECT SUM(accepted_submissions) AS prevRolling30
      FROM leetCodeSubmissions
      WHERE CAST(submission_date AS BIGINT) < EXTRACT(EPOCH FROM CURRENT_DATE - INTERVAL '30 days')
      AND CAST(submission_date AS BIGINT) >= EXTRACT(EPOCH FROM CURRENT_DATE - INTERVAL '60 days');`;

    let rolling30 = 0;
    const rolling30Result = await query(rolling30Query);
    rolling30 = rolling30Result.rows[0].rolling30;

    let prevRolling30 = 0;
    const prevRolling30Result = await query(prevRolling30Query);
    prevRolling30 = prevRolling30Result.rows[0]?.prevrolling30;

    return NextResponse.json(
      {
        success: true,
        message: responseMessage,
        data: { rolling30, prevRolling30 },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Leetcode API Error", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update Leetcode Submission Calendar.",
      },
      { status: 500 }
    );
  }
}
