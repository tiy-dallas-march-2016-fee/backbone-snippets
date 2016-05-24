if (window.ChatApp === undefined) { window.ChatApp = {}; }

(function(context) {

  var HeaderView = Backbone.View.extend({
    initialize: function() {
      this.render();

      this.listenTo(this.model, 'messagesChanged', function() {
        this.render();
      });
    },

    render: function() {

      var count = this.model.get('messages').length;

      console.log('rendering header', count);;
      this.$el.html('Messages: ' + count);
    }
  });

  context.HeaderView = HeaderView;

})(window.ChatApp);
