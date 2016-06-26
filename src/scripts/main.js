var model = {
  init: function() {
    console.log('model init');
  }
};

var helper = {

};

var view = {
  init: function () {
    console.log('view init');
  }
};

var app = {
  init: function () {
    model.init();
    view.init();
  }
};

app.init();
