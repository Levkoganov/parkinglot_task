const _ = require("lodash");

function parkinglotBusiestHour(logs) {
  const enterHours = [];
  const filterByEntrance = _.filter(logs, { 'action': "ENTRANCE" });

  for (const { date } of filterByEntrance) {
    if(date === null) continue;
    enterHours.push(date.format("HH:mm A")); // Push all dates into array
  }

  return getMostFrequentHours(enterHours);
}

function getMostFrequentHours(arr) {
  let max = 0
  let entrance = {};

  return arr.reduce((acc, hour) => {
    entrance[hour] = (entrance[hour] || 0) + 1;
    if (entrance[hour] > max) {
      max = entrance[hour];
      acc = [hour];
      return acc
    }

    if (entrance[hour] === max) 
      acc.push(hour);

    return acc;
  }, []);
  
}


module.exports = parkinglotBusiestHour;
