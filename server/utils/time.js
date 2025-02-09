const getRandomDateAndTime= ()=> {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // Start from tomorrow
  
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 7); // Max 7 days from tomorrow
  
    const randomDate = new Date(
      tomorrow.getTime() +
        Math.random() * (maxDate.getTime() - tomorrow.getTime())
    );
  
    const randomHour = Math.floor(Math.random() * 12) + 9; // 9 AM to 9 PM (inclusive)
    const randomMinute = Math.floor(Math.random() * 60);
  
    randomDate.setHours(randomHour, randomMinute, 0, 0); // Set random time
  
    return randomDate;
  }

  module.exports = { getRandomDateAndTime };