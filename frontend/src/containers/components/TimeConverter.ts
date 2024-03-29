function convertTimeString(timeString : string) {
  // Split the time string into date and time components
  const [datePart, timePart] = timeString.split('T');

  // Extract the time component and remove the timezone offset
  const time = timePart.split('+')[0];

  // Split the time component into hours, minutes, and seconds
  const [hours, minutes, seconds] = time.split(':').map(Number);

  // Convert date part into seconds
  const dateSeconds = Date.parse(datePart) / 1000; // Convert milliseconds to seconds

  // Convert hours, minutes, and seconds into seconds
  const totalSeconds = dateSeconds + (hours * 3600) + (minutes * 60) + seconds;

  return totalSeconds;
}

function secondsToTimeString(seconds: number) {

  // Create a new Date object with the provided seconds
  const date = new Date(seconds * 1000); // Convert seconds to milliseconds

  // Adjust the date object with the local time zone offset
  const offsetMilliseconds = date.getTimezoneOffset() * 60 * 1000; // Convert minutes to milliseconds
  const adjustedDate = new Date(date.getTime() + offsetMilliseconds);

  // Get the date components
  const year = adjustedDate.getFullYear();
  const month = String(adjustedDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const day = String(adjustedDate.getDate()).padStart(2, '0');

  // Get the time components
  const hours = String(adjustedDate.getHours()).padStart(2, '0');
  const minutes = String(adjustedDate.getMinutes()).padStart(2, '0');
  const secondsFormatted = String(adjustedDate.getSeconds()).padStart(2, '0');

  // Construct the time string
  const timeString = `${year}-${month}-${day}T${hours}:${minutes}:${secondsFormatted}`;

  // Get the timezone offset
  const timezoneOffset = -adjustedDate.getTimezoneOffset(); // Convert minutes to positive value

  // Construct the timezone offset string
  const offsetHours = Math.floor(timezoneOffset / 60);
  const offsetMinutes = timezoneOffset % 60;
  const offsetString = `${offsetHours >= 0 ? '+' : '-'}${String(Math.abs(offsetHours)).padStart(2, '0')}:${String(Math.abs(offsetMinutes)).padStart(2, '0')}`;

  // Concatenate the time string and the timezone offset string
  return `${timeString}${offsetString}`;
}

export { convertTimeString, secondsToTimeString};