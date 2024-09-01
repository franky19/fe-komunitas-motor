import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const response = await fetch("http://localhost:1337/api/carousels", {
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

    // Accessing the data - ensure the correct path is used
    const carousels = jsonData?.data || []; // Safely access the data

    // Log the data for debugging
    console.log("Fetched carousels data:", carousels);

    // Return the response
    return NextResponse.json(
      { data: carousels, status: 200, message: "Success" },
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
