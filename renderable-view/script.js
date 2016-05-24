
var SomeView = Backbone.View.extend({

  initialize: function() {
    this.render();
    this.paragraphClicks = 0;
  },

  events: {
    'click p': 'clicked',
    'click div': 'clickedDiv'
  },

  clicked: function() {
    this.paragraphClicks += 1;
    this.render();
  },

  clickedDiv: function() {
    console.log('clicked div but ignoring this');
  },

  render: function() {
    var html = '<p>first paragraph</p><p>second paragraph</p><div>a div!</div>';

    if (this.paragraphClicks > 0) {
      html += '<p>clicked ' + this.paragraphClicks + ' times.</p>'
    }

    this.$el.html(html);
  }
});

var view = new SomeView({ el: $('#attach-to-me') });
