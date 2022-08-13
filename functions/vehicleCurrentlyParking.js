function vehicleCurrentlyParking(logs) {
  const vehicleLastAction = {};

  const counters = {
    TRUCK: 0,
    CAR: 0,
    MOTORCYCLE: 0
  }

  for (const {vehicleId, action, vehicleType} of logs) {
    if (vehicleType === 'TRUCK')
      // Set the vehicle last ACTION
      vehicleLastAction[vehicleId] = { action, vehicleType };

    if (vehicleType === 'CAR')
      // Set the vehicle last ACTION
      vehicleLastAction[vehicleId] = { action, vehicleType };

    if (vehicleType === 'MOTORCYCLE')
      // Set the vehicle last ACTION
      vehicleLastAction[vehicleId] = { action, vehicleType };
  }

  for (const vehicle in vehicleLastAction) {
    // If vehicle last action was "ENTRANCE"
    if (vehicleLastAction[vehicle].action === "ENTRANCE")
      counters[vehicleLastAction[vehicle].vehicleType]++
    }

  return counters;
}

module.exports = vehicleCurrentlyParking;