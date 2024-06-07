import { NextRequest, NextResponse } from "next/server";
import { getSession } from "next-auth/jwt";

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    console.log("* Entering Github API function");

    const session = await getSession({ req });

    const githubUsername: string = session.user.githubUsername;
    const accessToken: string = session.accessToken;

    const events: { [date: string]: { commits: number; prs: number } } = {};

    const fetchEvents = async (
      githubUsername: string,
      accessToken: string
    ): Promise<void> => {
      let page = 1;
      const per_page = 100;

      const today = new Date();
      const thirtyDaysAgo = new Date(
        today.getTime() - 30 * 24 * 60 * 60 * 1000
      );
      let past30 = false;

      // Returns all of the events and cycles through pages of rsults until we reach the 30 day limit
      while (!past30) {
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/events?page=${page}&per_page=${per_page}`,
          {
            headers: {
              Authorization: `token ${accessToken}`,
            },
          }
        );

        const parsedResponse = await response.json();
        if (parsedResponse.length === 0) break;

        parsedResponse.forEach((event: any) => {
          const eventDate = new Date(event.created_at);

          //check if date is within 30 days and truncate response date formatting to align
          if (eventDate >= thirtyDaysAgo) {
            const date = eventDate.toISOString().split("T")[0];
            const eventType = event.type;

            //add to commit count
            if (eventType === "PushEvent") {
              if (!events[date]) {
                events[date] = { commits: 0, prs: 0 };
              }
              events[date].commits++;
            }

            // add to prs
            if (eventType === "PullRequestEvent") {
              if (!events[date]) {
                events[date] = { commits: 0, prs: 0 };
              }
              events[date].prs++;
            }
          } else {
            past30 = true; // Set flag to break out of the loop
            return; // Break out of the forEach loop
          }
        });
        page++;
      }
      return;
    };

    const getTotal = (days: number): { commits: number; prs: number } => {
      let totalCommits = 0,
        totalPrs = 0;

      //get an array of date keys from the events and slice of the first X days
      const intervalDates = Object.keys(events).slice(-days);
      for (const date of intervalDates) {
        totalCommits += events[date].commits;
        totalPrs += events[date].prs;
      }
      return { commits: totalCommits, prs: totalPrs };
    };

    await fetchEvents(githubUsername, accessToken);
    const oneDayEvents = getTotal(1);
    const sevenDayEvents = getTotal(7);
    const thirtyDayEvents = getTotal(30);

    return NextResponse.json(
      {
        success: true,
        message: "Github metrics fetched successfully",
        data: { oneDayEvents, sevenDayEvents, thirtyDayEvents },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Github API Error", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch the Github metrics",
      },
      { status: 500 }
    );
  }
}
