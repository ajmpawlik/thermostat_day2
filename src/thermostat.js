'use strict';

function Thermostat() {
  // if you would like to target without using this just make it a variable
  // var temp = this.temperature
  this.MINIMUM_TEMPERATURE = 10;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.temperature = 20;
  this.powerSavingMode = true;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.isMinimumTemperature = function() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.powerSavingMode === false) {
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  }
  return
    this.temperature === this.MAX_LIMIT_PSM_ON;
  };

Thermostat.prototype.up = function() {
    if (this.isMaximumTemperature()) {
      return;
    }
   this.temperature += 1;
};

Thermostat.prototype.down = function() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature -= 1;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
    return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
    this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
    this.powerSavingMode = true;
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20; 
}
