var countdown = require('countdown');
var model = reuire('model.js');

var helper = module.export = {
  dateDiff: function () {
    return countdown(model.currentDate, model.eventDate);
  }
};
