import { NextResponse } from "next/server";
import URL from "../config";
import { OrgStructure } from "@/app/store/slices/frontendSlice";

export async function POST() {
  try {
    const response = await fetch(URL.orgStructure, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    // Parse the response data
    const jsonData = await response.json();

    const orgStructure: OrgStructure = jsonData?.data || [];

    // Return the response with typed data
    return NextResponse.json(
      { data: orgStructure, status: 200, message: "Success" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching data:", error.message);

    return NextResponse.json(
      {
        data: [],
        status: 500,
        message: "Failed to fetch carousels data",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
