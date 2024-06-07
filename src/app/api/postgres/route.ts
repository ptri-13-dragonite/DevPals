import { NextResponse } from "next/server";
import { query } from "../../../utils/db";

export default async function handler(req, res) {
  try {
    console.log("* Entering handler function");
    const result = await query("SELECT NOW()");
    return NextResponse.json({ success: true, time: result.rows[0].now });
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json(
      { success: false, message: "Database connection failed" },
      { status: 500 }
    );
  }
}
