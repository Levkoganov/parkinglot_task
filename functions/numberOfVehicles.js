// Dependencies
const _ = require("lodash");
const moment = require("moment");

function numberOfVehicles (logs, hours) {
  const vehiclesLastEntrances = {};
  const counters = {
    TRUCK: 0,
    CAR: 0,
    MOTORCYCLE: 0
  };

  const sortedLogs = _.sortBy(logs, 'date'); // Sort by date
  
  for (const { date, vehicleId, action, vehicleType } of sortedLogs) {
    if (action === 'ENTRANCE')
      // Set the vehicle last entrance
      vehiclesLastEntrances[vehicleId] = { lastEntrance: date };
      
    if (action === 'EXIT') {
      // Check if vehicle parking time is greater than "X" hours
      if (getDiffInHours(vehiclesLastEntrances[vehicleId]?.lastEntrance, date) > hours) 
        counters[vehicleType]++;
    }
  }

  return counters;
}

// Calculate hours spent in parkinglot
function getDiffInHours (start, end) {
  if (start === null && end === null) return 0;
  return moment.duration(end.diff(start)).asHours();
}

module.exports = numberOfVehicles;
