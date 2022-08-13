// Dependencies
const moment = require("moment");
const _ = require("lodash")

function vehicleSpentNight(logs) {
  const vehiclesLastEntrances = {};
  const closingTime = 23.5;
  let carSpentTheNight = 0;


  const sortedLogs = _.sortBy(logs, ['date']); // Sort by date

  for (const {vehicleId, date, action} of sortedLogs) {
    if(action === "ENTRANCE") 
      // Set the vehicle last entrance
      vehiclesLastEntrances[vehicleId] = { lastEntrance: date }

    if (action === "EXIT") 
      // Check if vehicle left after closing hour
      if (getVehicleExitHour(vehiclesLastEntrances[vehicleId].lastEntrance, date) > closingTime)
        carSpentTheNight++
  }

  return carSpentTheNight;
}

// Calculate vehicle exit hour
function getVehicleExitHour(start, end) {  
  const duration = moment.duration(end.diff(start)).asHours();
  const entranceTime = start.hour()

  return duration + entranceTime;
}

module.exports = vehicleSpentNight;