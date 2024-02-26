import React from "react";

const page = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full">
      <h1 className="text-2xl font-semibold mb-4">Report an Issue</h1>
      <form>
        <div className="mb-4">
          <label
            htmlFor="flightNumber"
            className="block text-gray-700 font-medium mb-2"
          >
            Flight Number
          </label>
          <input
            type="text"
            id="pnrNumber"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter PNR number"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="issueDescription"
            className="block text-gray-700 font-medium mb-2"
          >
            Issue Description
          </label>
          <textarea
            id="issueDescription"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            rows={4}
            placeholder="Describe the issue..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default page;
