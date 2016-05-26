if (window.BasicRouting === undefined) { window.BasicRouting = {}; }

(function(context) {

  var SecondView = Backbone.View.extend({
    render: function() {
      this.$el.html('<p>This is the second view!</p>')
      return this;
    }
  });

  context.SecondView = SecondView;

})(window.BasicRouting);
