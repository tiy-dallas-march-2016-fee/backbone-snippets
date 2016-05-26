if (window.BasicRouting === undefined) { window.BasicRouting = {}; }

(function(context) {

  var FirstView = Backbone.View.extend({

    events: {
      'click button': 'buttonClicked'
    },

    buttonClicked: function() {
      console.log('button clicked!');
      context.Routes.navigate('second', { trigger: true });
    },

    render: function() {
      this.$el.html('<p>First view! <button>navigate to #2</button></p>')
      return this;
    }
  });

  context.FirstView = FirstView;

})(window.BasicRouting);
