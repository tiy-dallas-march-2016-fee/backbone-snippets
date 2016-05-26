if (window.MutantBrowser === undefined) { window.MutantBrowser = {}; }

(function(context) {

  var templateHtml = $('#detail-template').html();
  var templateFunc = _.template(templateHtml);

  var DetailView = Backbone.View.extend({

    events: {
      'click .back-button': 'backButtonClicked'
    },

    backButtonClicked: function() {
      history.go(-1);
    },

    render: function() {

      //shortcut: if you need to convert your model to a "regular" JS object, call toJSON on it.
      var html = templateFunc(this.model.toJSON());

      this.$el.html(html);
      return this;
    }
  });

  context.DetailView = DetailView;

})(window.MutantBrowser);
