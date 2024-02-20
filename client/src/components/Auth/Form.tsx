'use client';
import React, { useState } from 'react'
import { HandlePNRSubmission } from '../utils/HandlePNRSubmission';
import { useAuth } from '@/context/AuthContext';

interface formProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Form = ({open, setOpen}: formProps) => {
  const [formData, setFormData] = useState({
    boardingTo: '',
    boardingFrom: '',
    passengerName: '',
    flightId: ''
  });
  const {pnrNumber, wallet} = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  if (open && wallet)
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
          <div className="px-4 sm:px-0">
            <h2 className="text-base font-semibold leading-7 text-gray-900">User Details</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be saved for future payouts.
            </p>
          </div>

          <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2" onSubmit={
            () => HandlePNRSubmission(pnrNumber ,formData.boardingTo, formData.boardingFrom, formData.passengerName, formData.flightId)
          }>
            <div className="px-4 py-6 sm:p-8">
              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label htmlFor="boardingTo" className="block text-sm font-medium leading-6 text-gray-900">
                    boardingTo
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 sm:max-w-md">
                      <input
                        type="text"
                        name="boardingTo"
                        onChange={handleChange}
                        value={formData.boardingTo}
                        id="boardingTo"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="India"
                      />
                    </div>
                  </div>
                </div>
                {/* more fields are "boardingFrom" , "passengerName" */}
                <div className="sm:col-span-4">
                  <label htmlFor="boardingFrom" className="block text-sm font-medium leading-6 text-gray-900">
                  boardingFrom
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 sm:max-w-md">
                      <input
                        type="text"
                        name="boardingFrom"
                        onChange={handleChange}
                        value={formData.boardingFrom}
                        id="boardingFrom"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Singapore"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="passengerName" className="block text-sm font-medium leading-6 text-gray-900">
                    Passenger Name
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 sm:max-w-md">
                      <input
                        type="text"
                        name="passengerName"
                        onChange={handleChange}
                        value={formData.passengerName}
                        id="passengerName"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                <div className="sm:col-span-4">
                  <label htmlFor="flightId" className="block text-sm font-medium leading-6 text-gray-900">
                    Flight ID
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 sm:max-w-md">
                      <input
                        type="text"
                        name="flightId"
                        onChange={handleChange}
                        value={formData.flightId}
                        id="flightId"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="ABQ123"
                      />
                    </div>
                  </div>
              </div>
              </div>
            </div>
            </div>
            <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
              <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={
                () => setOpen(false)
              }>
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Proceed
              </button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Form;
