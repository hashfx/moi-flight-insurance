import { NextApiRequest, NextApiResponse } from "next";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  // Extract flightId from query parameters
  const { flightId } = req.query;
  console.log(flightId)
  try {
    // Fetch data from the flight API
    const response = await fetch(`https://ap-south-1.aws.neurelo.com/rest/flight`, {
      // header X-API-KEY is required for authentication
      headers: {
        'X-API-KEY': process.env.FLIGHT_API_KEY as string,
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data from the flight API');
    }

    // Parse the response JSON
    const data = await response.json();

    // Filter data based on flightId
    const filteredData = data.filter((flight: {flightId: string}) => flight.flightId === flightId);

    // Prepare response
    res.status(200).json({ status: 'success', data: filteredData });
  } catch (error: any) {
    // Handle errors
    res.status(500).json({ status: 'error', error: error.message });
  }
}
