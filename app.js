// Dependencies
const moment = require("moment");

// Functions
const numberOfVehicles = require("./functions/numberOfVehicles");
const vehicleSpentNight = require("./functions/vehicleSpentNight");
const vehicleCurrentlyParking = require("./functions/vehicleCurrentlyParking");
const parkinglotBusiestHour = require("./functions/parkinglotBusiestHour");

const logs = [
  ["11354", "TRUCK", "2020-01-05T06:00:00.000Z", "ENTRANCE"],
  ["11354", "TRUCK", "2020-01-06T11:00:00.000Z", "EXIT"],
  ["86453", "CAR", "2020-01-01T17:00:00.000Z", "ENTRANCE"],
  ["86453", "CAR", "2020-01-01T19:10:00.000Z", "EXIT"],
  ["74542", "MOTORCYCLE", "2020-11-01T06:00:00.000Z", "ENTRANCE"],
  ["74542", "MOTORCYCLE", "2020-11-01T23:10:00.000Z", "EXIT"],
  ["11354", "TRUCK", "2020-12-10T10:00:00.000Z", "ENTRANCE"],
];

let mapLogs = [];

// Check if logs exist
if (typeof logs !== "undefined" && Array.isArray(logs)) {
  mapLogs = logs.map(([vehicleId, vehicleType, date, action]) => ({
    vehicleId,
    vehicleType,
    date: moment(date).utc(),
    action,
  }));
}

const hours = 2 // set required hour to pass

console.log("vehicles pass 'X' time:", numberOfVehicles(mapLogs, hours)); // Task 1
console.log("Vehicles spent the night:", vehicleSpentNight(mapLogs)); // Task 2
console.log("Currently parking:", vehicleCurrentlyParking(mapLogs)); // Task 3
console.log("busiest hours:", parkinglotBusiestHour(mapLogs)); // Task 4
