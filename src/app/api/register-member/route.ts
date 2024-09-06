import { sanitizeInput } from "@/app/helper/ValidationSchema";
import { NextRequest, NextResponse } from "next/server";
import URL from "../config";

export async function POST(req: NextRequest) {
  try {
    const requestBody = await req.json();

    // // Send POST request to external API
    const response = await fetch(URL.register, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: requestBody,
      }),
    });

    // // Check if the response is successful
    if (response.ok) {
      // Custom data structure based on API response
      const registerData = {
        FormData: requestBody,
      };

      // Return customized response data
      return NextResponse.json(
        {
          data: registerData,
          message: "Register successful",
          status: 200,
        },
        { status: 200 }
      );
    } else {
      const errorResponse = await response.json();
      throw new Error(
        errorResponse?.message || `Failed to register: ${response.statusText}`
      );
    }
  } catch (error: any) {
    // Return error response
    return NextResponse.json(
      {
        data: [],
        status: 500,
        message: "Registration failed",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
