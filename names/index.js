let peopleNames = require("../country/state/city/index.js");
let firstNames = require("../utilities/utils/index.js");

const getPeopleInCity = (peopleNames) => {
  return firstNames(peopleNames);
};

module.exports = getPeopleInCity;
