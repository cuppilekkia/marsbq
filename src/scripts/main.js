var model = require('./modules/model.js');
var view = require('./modules/view.js');
var helper = require('./modules/helper.js')

var app = {
  init: function () {
    model.init();
    view.init();
  }
};

app.init();
