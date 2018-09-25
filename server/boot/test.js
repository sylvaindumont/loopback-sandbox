"use strict";
const loopback = require("loopback");

async function crash() {
  const createdInstance = await loopback
    .getModel("test")
    .create({ geo: { lat: 5, lng: 5 } });
  await loopback
    .getModel("test")
    .replaceById(createdInstance.id, { geo: { lat: 6, lng: 5 } });
  const foundInstance = await loopback
    .getModel("test")
    .findById(createdInstance.id);
}

module.exports = function() {
  crash();
};
