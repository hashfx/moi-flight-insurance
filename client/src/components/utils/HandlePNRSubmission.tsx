'use client'
import { useAuth } from '@/context/AuthContext';
import axios from 'axios';
import { useRouter } from 'next/router';

export const HandlePNRSubmission = async (pnrNumber: string,boardingTo: string, boardingFrom: string, passengerName: string, flightId: string) => {
  console.log("hii");
  const router = useRouter();
  const {setResponseData, claimDetails} = useAuth();
  try {
    // fetch flight details from the flight API
    const response = await axios.get(`https://localhost:3000/api/flight?flightId=${flightId}`);
    const flightData = response.data;
    console.log(flightData);
    if (!flightData) {
      throw new Error('Failed to fetch flight data');
    }
    // Extract necessary details from flightData 
    // {
    //   "arrivalTime": "2024-03-01T08:30:00.000Z",
    //   "company": "US Airlines",
    //   "departureTime": "2024-03-01T08:30:00.000Z",
    //   "destination": "London",
    //   "flightId": "ABC123",
    //   "id": "65d2e37c4c72ae5b7cf519d9",
    //   "origin": "Paris",
    //   "points": 25000
    // },
    const { departureTime, flightNumber } = flightData;
    // Prompt user for additional data (you can customize this part as needed)
    const insuranceNumber = await generateInsuranceNumber();

    // Save data to FlightData API
    const saveResponse = await axios.post('https://ap-south-1.aws.neurelo.com/rest/FlightData/__one', {
      updatedOn: new Date().toISOString(),
      status: "NOT_STARTED",
      claimableAmount: claimDetails.claimableAmount,
      boardingTo,
      flightNumber,
      premiumPaid: claimDetails.premiumPaid,
      boardingFrom,
      dateOfFlight: departureTime,
      passengerName,
      insuranceNumber,
      pnrNumber,
    }, {
      headers: {
        'X-API-KEY': process.env.FLIGHT_DATA_API_KEY as string,
      },
    });
    if (!saveResponse.data) {
      throw new Error('Failed to save data');
    }
    // Save response data to context API
    setResponseData(saveResponse.data);
    // Redirect to dashboard route with saved details in context API
    router.push('/dashboard');
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
  }
};

// Function to generate a random insurance number (you can customize this as needed)
const generateInsuranceNumber = () => {
  return 'INS' + Math.floor(Math.random() * 1000).toString().padStart(3, '0');
};
