
var ClickableView = Backbone.View.extend({

  events: {
    'click': 'elementClicked'
  },

  elementClicked: function() {
    this.$el.toggleClass('on');
  }

});

new ClickableView({ el: $('#clickable') });
