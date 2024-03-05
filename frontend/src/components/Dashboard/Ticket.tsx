import React from "react";

const Ticket = () => {
	return (
		<div className="w-fit h-fit">
			{/* <div
				className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover"
				style={{
					backgroundImage:
						"url(https://images.unsplash.com/photo-1519666336592-e225a99dcd2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80)",
				}}
			>
				<div className="absolute bg-blue-900 opacity-80 inset-0 z-0"></div>
				<div className="max-w-md w-full h-full mx-auto z-10 bg-blue-900 rounded-3xl">
					<div className="flex flex-col">
						<div className="bg-white relative drop-shadow-2xl  rounded-3xl p-4 m-4">
							<div className="flex-none sm:flex">
								<div className=" relative h-32 w-32   sm:mb-0 mb-3 hidden">
									<img
										src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
										alt="aji"
										className=" w-32 h-32 object-cover rounded-2xl"
									/>
									<a
										href="#"
										className="absolute -right-2 bottom-2   -ml-3  text-white p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											className="h-4 w-4"
										>
											<path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
										</svg>
									</a>
								</div>
								<div className="flex-auto justify-evenly">
									<div className="flex items-center justify-between">
										<div className="flex items-center  my-1">
											<span className="mr-3 rounded-full bg-white w-8 h-8">
												<img
													src="https://image.winudf.com/v2/image1/Y29tLmJldHMuYWlyaW5kaWEudWlfaWNvbl8xNTU0NTM4MzcxXzA0Mw/icon.png?w=&amp;fakeurl=1"
													className="h-8 p-1"
												/>
											</span>
											<h2 className="font-medium">Airindia</h2>
										</div>
										<div className="ml-auto text-blue-800">A380</div>
									</div>
									<div className="border-b border-dashed my-5"></div>
									<div className="flex items-center">
										<div className="flex flex-col">
											<div className="flex-auto text-xs text-gray-400 my-1">
												<span className="mr-1 ">MO</span>
												<span>19 22</span>
											</div>
											<div className="w-full flex-none text-lg text-blue-800 font-bold leading-none">
												COK
											</div>
											<div className="text-xs">Cochi</div>
										</div>
										<div className="flex flex-col mx-auto">
											<img
												src="https://image.winudf.com/v2/image1/Y29tLmJldHMuYWlyaW5kaWEudWlfaWNvbl8xNTU0NTM4MzcxXzA0Mw/icon.png?w=&amp;fakeurl=1"
												className="w-20 p-1"
											/>
										</div>
										<div className="flex flex-col ">
											<div className="flex-auto text-xs text-gray-400 my-1">
												<span className="mr-1">MO</span>
												<span>19 22</span>
											</div>
											<div className="w-full flex-none text-lg text-blue-800 font-bold leading-none">
												DXB
											</div>
											<div className="text-xs">Dubai</div>
										</div>
									</div>
									<div className="border-b border-dashed border-b-2 my-5 pt-5">
										<div className="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -left-2"></div>
										<div className="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -right-2"></div>
									</div>
									<div className="flex items-center mb-5 p-5 text-sm">
										<div className="flex flex-col">
											<span className="text-sm">Flight</span>
											<div className="font-semibold">Airbus380</div>
										</div>
										<div className="flex flex-col ml-auto">
											<span className="text-sm">Gate</span>
											<div className="font-semibold">B3</div>
										</div>
									</div>
									<div className="flex items-center mb-4 px-5">
										<div className="flex flex-col text-sm">
											<span className="">Board</span>
											<div className="font-semibold">11:50AM</div>
										</div>
										<div className="flex flex-col mx-auto text-sm">
											<span className="">Departs</span>
											<div className="font-semibold">11:30Am</div>
										</div>
										<div className="flex flex-col text-sm">
											<span className="">Arrived</span>
											<div className="font-semibold">2:00PM</div>
										</div>
									</div>
									<div className="border-b border-dashed border-b-2 my-5 pt-5">
										<div className="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -left-2"></div>
										<div className="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -right-2"></div>
									</div>
									<div className="flex items-center px-5 pt-3 text-sm">
										<div className="flex flex-col">
											<span className="">Passanger</span>
											<div className="font-semibold">Ajimon</div>
										</div>
										<div className="flex flex-col mx-auto">
											<span className="">Class</span>
											<div className="font-semibold">Economic</div>
										</div>
										<div className="flex flex-col">
											<span className="">Seat</span>
											<div className="font-semibold">12 E</div>
										</div>
									</div>
									<div className="flex flex-col py-5  justify-center text-sm ">
										<h6 className="font-bold text-center">Boarding Pass</h6>

										<div className="barcode h-14 w-0 inline-block mt-4 relative left-auto"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}
			<div className="relative w-[327px] h-[557px] bg-[#2F363E] rounded-3xl">
				<div className=" w-[279px] h-[132.50px] absolute left-[29px] top-[72px]">
					<div className="inline-flex space-x-12 items-start justify-start absolute left-[0px] top-[21.50px] w-[279px] h-11 border-t border-dashed pt-[21.5px] border-[#E2E4EA] divide-x-8">
						<div className="inline-flex flex-col space-y-1 items-start justify-start relative w-[115.50px] h-11">
							<p className="w-[115.50px] h-4 text-xs font-medium leading-[15.60px] text-[#8c8e98]">
								Name
							</p>
							<p className="w-[115.50px] h-6 text-base font-bold leading-normal text-white">
								Mustafa Azad
							</p>
						</div>
						<div className="inline-flex flex-col space-y-1 items-start justify-start relative w-[115.50px] h-11">
							<p className="w-[115.50px] h-4 text-xs font-medium leading-[15.60px] text-[#8c8e98]">
								Insurance Number
							</p>
							<p className="w-[115.50px] h-6 text-base font-bold leading-normal text-white">
								ABC12343
							</p>
						</div>
					</div>
					<div className="inline-flex space-x-12 items-start justify-start absolute left-[0px] top-[88.50px] w-[279px] h-11">
						<div className="inline-flex flex-col space-y-1 items-start justify-start relative w-[115.50px] h-11">
							<p className="w-[140px] h-4 text-xs font-medium leading-[15.60px] text-[#8c8e98]">
								Max. Claimable Amount
							</p>
							<p className="w-[115.50px] h-6 text-base font-bold leading-normal text-white">
								₹8000
							</p>
						</div>
						<div className="inline-flex flex-col space-y-1 items-start justify-start relative w-[115.50px] h-11">
							<p className="w-[115.50px] h-4 text-xs font-medium leading-[15.60px] text-[#8c8e98]">
								Premium Paid
							</p>
							<p className="w-[115.50px] h-6 text-base font-bold leading-normal text-white">
								₹199
							</p>
						</div>
					</div>
				</div>
				<p className="w-6 h-4 absolute left-[29px] top-[17px] text-xs font-medium leading-[15.60px] text-[#c0c2c5]">
					PNR
				</p>
				<p className="w-[140px] h-[52px] absolute left-[29px] top-8 text-[40px] font-medium leading-[52px] text-white">
					XYZ789
				</p>
				<div className=" w-[279px] h-[111px] absolute left-[29px] top-[418px]">
					<div className="inline-flex space-x-12 items-start justify-start absolute left-[0px] top-[0px] w-[279px] h-11">
						<div className="inline-flex flex-col space-y-1 items-start justify-start relative w-[115.50px] h-11">
							<p className="w-[115.50px] h-4 text-xs font-medium leading-[15.60px] text-[#8c8e98]">
								Departure date
							</p>
							<p className="w-[115.50px] h-6 text-base font-bold leading-normal text-white">
								March 4, 2023
							</p>
						</div>
						<div className="inline-flex flex-col space-y-1 items-start justify-start relative w-[115.50px] h-11">
							<p className="w-[115.50px] h-4 text-xs font-medium leading-[15.60px] text-[#8c8e98]">
								Time
							</p>
							<p className="w-[115.50px] h-6 text-base font-bold leading-normal text-white">
								07:00 PM
							</p>
						</div>
					</div>
					<div className="inline-flex space-x-12 items-start justify-start absolute left-[0px] top-[67px] w-[279px] h-11">
						<div className="inline-flex flex-col space-y-1 items-start justify-start relative w-[115.50px] h-11">
							<p className="w-[115.50px] h-4 text-xs font-medium leading-[15.60px] text-[#8c8e98]">
								Flight Number
							</p>
							<p className="w-[115.50px] h-6 text-base font-bold leading-normal text-white">
								AI-456
							</p>
						</div>
						<div className="inline-flex flex-col space-y-1 items-start justify-start relative w-[115.50px] h-11">
							<p className="w-[115.50px] h-4 text-xs font-medium leading-[15.60px] text-[#8c8e98]">
								Seat
							</p>
							<p className="w-[115.50px] h-6 text-base font-bold leading-normal text-white">
								B4
							</p>
						</div>
					</div>
				</div>
				<p className="opacity-70 w-[72px] h-[22px] absolute left-[29px] top-[369px] text-xs leading-[21.60px] text-white">
					Flight Status:{" "}
				</p>
				<p className="opacity-70 w-[90px] h-[29px] absolute left-[107px] top-[365px] text-base font-bold leading-[28.80px] text-white">
					Not started
				</p>
				<div className=" invisible w-[279px] h-[132.50px] absolute left-6 top-[98px]">
					<div className="inline-flex space-x-12 items-start justify-start absolute left-[0px] top-[21.50px] w-[279px] h-11">
						<div className="inline-flex flex-col space-y-1 items-start justify-start relative w-[115.50px] h-11">
							<p className="w-[115.50px] h-4 text-xs font-medium leading-[15.60px] text-[#8c8e98]">
								Departure date
							</p>
							<p className="w-[115.50px] h-6 text-base font-bold leading-normal text-white">
								March 4, 2023
							</p>
						</div>
						<div className="inline-flex flex-col space-y-1 items-start justify-start relative w-[115.50px] h-11">
							<p className="w-[115.50px] h-4 text-xs font-medium leading-[15.60px] text-[#8c8e98]">
								Time
							</p>
							<p className="w-[115.50px] h-6 text-base font-bold leading-normal text-white">
								07:00 PM
							</p>
						</div>
					</div>
					<div className="inline-flex space-x-12 items-start justify-start absolute left-[0px] top-[88.50px] w-[279px] h-11">
						<div className="inline-flex flex-col space-y-1 items-start justify-start relative w-[115.50px] h-11">
							<p className="w-[115.50px] h-4 text-xs font-medium leading-[15.60px] text-[#8c8e98]">
								Class
							</p>
							<p className="w-[115.50px] h-6 text-base font-bold leading-normal text-white">
								Business
							</p>
						</div>
						<div className="inline-flex flex-col space-y-1 items-start justify-start relative w-[115.50px] h-11">
							<p className="w-[115.50px] h-4 text-xs font-medium leading-[15.60px] text-[#8c8e98]">
								Seat
							</p>
							<p className="w-[115.50px] h-6 text-base font-bold leading-normal text-white">
								B4
							</p>
						</div>
					</div>
				</div>
				<div className="inline-flex items-center justify-center absolute left-[29px] top-[273px] w-[279px] h-[74px]">
					<div className="inline-flex flex-col items-start justify-center relative w-[105.50px] h-[74px]">
						<p className="w-[105.50px] h-[52px] text-[40px] font-medium leading-[52px] text-white">
							LAX
						</p>
						<p className="opacity-70 w-[105.50px] h-[22px] text-xs leading-[21.60px] text-white">
							Los Angeles, CA
						</p>
					</div>
					<div className="flex items-center justify-center relative bg-[#20262E] w-[68px] h-9 px-6 py-2 rounded-[32px]">
						<svg
							width="21"
							height="20"
							viewBox="0 0 21 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M7.16668 18.3334L8.83334 18.3334L13 11.2501L17.5833 11.2501C18.275 11.2501 18.8333 10.6917 18.8333 10.0001C18.8333 9.30841 18.275 8.75008 17.5833 8.75008L13 8.75008L8.83334 1.66675L7.16668 1.66675L9.25001 8.75008L4.66668 8.75008L3.41668 6.66675L2.16668 6.66675L3.00001 10.0001L2.16668 13.3334L3.41668 13.3334L4.66668 11.2501L9.25001 11.2501L7.16668 18.3334Z"
								fill="white"
							/>
						</svg>
					</div>
					<div className="inline-flex flex-col items-start justify-center relative w-[105.50px] h-[74px]">
						<p className="w-[105.50px] h-[52px] text-[40px] font-medium leading-[52px] text-right text-white">
							NYC
						</p>
						<p className="opacity-70 w-[105.50px] h-[22px] text-xs leading-[21.60px] text-right text-white">
							New York City
						</p>
					</div>
				</div>
				<div className=" invisible w-[263px] h-14 absolute left-8 top-[469px]"></div>
			</div>
		</div>
	);
};

export default Ticket;
