if (window.BasicRouting === undefined) { window.BasicRouting = {}; }

(function(context) {

  var $root = $('#routing-app');

  var view1 = new context.FirstView({ el: $root });
  var view2 = new context.SecondView({ el: $root });


  var Routes = Backbone.Router.extend({

    routes: {
      'first' : 'firstRoute',
      'second' : 'secondRoute',
      'third/:id' : 'thirdRoute'
    },

    firstRoute: function() {
      console.log('first');
      view1.render();
    },

    secondRoute: function() {
      console.log('second');
      view2.render();
    },

    thirdRoute: function(id) {
      console.log('third', id);
    }

  });

  var routes = context.Routes = new Routes();
  Backbone.history.start();




})(window.BasicRouting);
