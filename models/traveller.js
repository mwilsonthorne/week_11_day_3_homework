const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocationsArray = [];

  this.journeys.forEach((journey) => {
    startLocationsArray.push(journey.startLocation);
});

return startLocationsArray;

}

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocationsArray = [];

  this.journeys.forEach((journey) => {
    endLocationsArray.push(journey.endLocation);
  });

  return endLocationsArray;
}

Traveller.prototype.getModesOfTransport = function () {
  const modeOfTransportArray = [];

  this.journeys.forEach((journey) => {
    modeOfTransportArray.push(journey.transport);
  });

  return modeOfTransportArray;

}

Traveller.prototype.getJourneysByTransport = function (transport) {
  const findByTransport = [];

  this.journeys.forEach((journey) => {
      if(transport === journey.transport){
        findByTransport.push(journey);
      }
  });

  return findByTransport;
};



Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeyAboveMinDistance = [];

  this.journeys.forEach((journey) => {
    if(minDistance < journey.distance){
      journeyAboveMinDistance.push(journey);
    }

  });

  return journeyAboveMinDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let total = 0;

  this.journeys.forEach((journey) => {total += journey.distance});

  return total;

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
