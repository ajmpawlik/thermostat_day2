'use strict';

function Thermostat() {
  // if you would like to target without using this just make it a variable
  // var temp = this.temperature
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
  this.powerSavingMode = true;
  this.isMinimumTemperature = function() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  };
  this.up = function() {
     return this.temperature += 1;
  };
  this.down = function() {
    if (this.isMinimumTemperature()) {
      return;
    }
     return this.temperature -= 1;
  };
  this.getCurrentTemperature = function() {
   return this.temperature;
  };
  this.isPowerSavingModeOn = function() {
    return this.isPowerSavingModeOn = true;
  };
  this.switchPowerSavingModeOff = function() {
    this.powerSavingMode = false;
  };

};
