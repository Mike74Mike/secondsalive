const secsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;

const secsPerDay = secsPerMin * minsPerHour * hoursPerDay;
console.log(`There are ${secsPerDay} seconds in a day.`);

const yearAlive = 22;
const secsAlive = secsPerMin * minsPerHour * hoursPerDay * daysPerWeek * weeksPerYear * yearAlive;  
console.log(`I have been alive for ${secsAlive} seconds`); 