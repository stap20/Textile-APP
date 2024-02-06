export default function prepareDuration(minutes) {
    const days = Math.floor(minutes / (60 * 24)); // Calculate the number of days
    const hours = Math.floor((minutes % (60 * 24)) / 60); // Calculate the number of hours
    const remainingMinutes = minutes % 60; // Calculate the remaining minutes
  
    let durationString = '';
    
    if (days > 0) {
        durationString += days + 'd ';
    }
    if (hours > 0) {
        durationString += hours + 'h ';
    }
    
    // Always include minutes
    durationString += remainingMinutes + 'm';
  
    return durationString;
  }