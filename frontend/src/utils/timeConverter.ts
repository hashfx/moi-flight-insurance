export const convertTimestamp = (timestamp:string) => {
    const date = new Date(timestamp);

    // Extracting date components
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();

    // Adding ordinal suffix to the day
    let daySuffix;
    if (day === 1 || day === 21 || day === 31) {
        daySuffix = "st";
    } else if (day === 2 || day === 22) {
        daySuffix = "nd";
    } else if (day === 3 || day === 23) {
        daySuffix = "rd";
    } else {
        daySuffix = "th";
    }

    // Extracting time components
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Convert hours to 12-hour format and determine AM/PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Handle 12-hour format

    // Format minutes to have leading zero if less than 10
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    // Constructing the formatted string
    const formattedDate = `${month} ${day}${daySuffix}`;
    const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;

    return `${formattedDate}, ${formattedTime}`;
}
