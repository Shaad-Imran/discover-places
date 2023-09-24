import { NextResponse } from "next/server";

// Define constants
const BASE_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json?";
const GOOGLE_PLACE_KEY = process.env.GOOGLE_PLACE_KEY;

// Define a function to handle GET requests
export async function GET(request: any) {
  try {
    // Extract the query parameter from the request
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");

    // Construct the API URL
    const apiUrl = `${BASE_URL}query=${query}&key=${GOOGLE_PLACE_KEY}`;

    // Make a GET request to the Google Places API
    const response = await fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Check if the response status is okay
    if (response.ok) {
      const data = await response.json();
      return NextResponse.json(data);
    } else {
      // Handle non-successful response by manually creating an error response
      return new Response(
        JSON.stringify({
          error: "Failed to fetch data from Google Places API",
        }),
        {
          status: response.status,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    // Handle unexpected errors
    console.error("An error occurred:", error);
    return new Response(
      JSON.stringify({
        error: "An error occurred while processing the request",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
