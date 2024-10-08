import { Carousel } from "@/app/store/slices/frontendSlice";
import { NextResponse } from "next/server";
import URL from "../config";

export async function POST() {
  try {
    const response = await fetch(URL.carousel, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("");

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    // Parse the response data
    const jsonData = await response.json();

    // Safely access the data and cast it to the Carousel type
    const carousels: Carousel[] = jsonData?.data || [];

    // Log the data for debugging
    console.log("Fetched carousels data:", carousels);

    // Return the response with typed data
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
