if (window.ChatApp === undefined) { window.ChatApp = {}; }

(function(context) {

  var ChatView = Backbone.View.extend({
    initialize: function() {
      this.render();
    },

    events: {
      'keyup input': 'inputChanged'
    },

    inputChanged: function(evt) {
      if (evt.keyCode === 13) {
        var newMessage = evt.target.value;
        this.$('input').val('');

        this.model.addMessage(newMessage);

        this.render();
      }
    },

    render: function() {
      console.log('rendering chat');

      this.$('ul').html('');

      var messages = this.model.get('messages');
      messages.forEach(function(message) {
        this.$('ul').append('<li>' + message + '</li>')
      });

    }
  });

  context.ChatView = ChatView;

})(window.ChatApp);
