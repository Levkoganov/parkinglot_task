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
  let distribution = {};
  let max = 0;
  let result = [];

  arr.forEach((entranceHour) => {
    distribution[entranceHour] = (distribution[entranceHour] || 0) + 1; // increment "entranceHour" key value by 1
    if (distribution[entranceHour] > max) { 
      max = distribution[entranceHour]; // set "max" to the most appeared "distribution[entranceHour]" key value
      result = [entranceHour] // set new busiest entranceHour
      return;
    }

    if (distribution[entranceHour] === max) result.push(entranceHour);
  });

  return result;
}


module.exports = parkinglotBusiestHour;
