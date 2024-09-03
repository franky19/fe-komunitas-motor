import { sanitizeInput } from "@/app/helper/ValidationSchema";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const requestBody = await req.json();
    const { email, password } = requestBody;
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedPassword = sanitizeInput(password);
    const cookieStore = cookies();
    const response = await fetch("http://localhost:1337/api/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: sanitizedEmail,
        password: sanitizedPassword,
      }),
    });
    if (response.ok) {
      const jsonData = await response.json();
      const jwtToken = jsonData?.jwt || "";
      cookieStore.set("token", jwtToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 1 week
      });

      const token = cookieStore.get("token");

      console.log("token:",token?.value)
      return NextResponse.json(
        {
          token: jwtToken,
        },
        { status: 200 }
      );
    } else {
      const errorResponse = await response.json();
      throw new Error(
        errorResponse?.message || `Failed to fetch data: ${response.statusText}`
      );
    }
  } catch (error: any) {
    console.error("Error during login:", error.message);

    return NextResponse.json(
      {
        data: [],
        status: 500,
        message: "Login failed",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
