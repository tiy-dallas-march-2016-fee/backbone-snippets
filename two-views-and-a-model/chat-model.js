if (window.ChatApp === undefined) { window.ChatApp = {}; }

(function(context) {

  var ChatModel = Backbone.Model.extend({

    initialize: function() {
      this.set('messages', []);
    },

    addMessage: function(message) {
      var messages = this.get('messages');
      messages.push(message);
      this.set('messages', messages);

      this.trigger('messagesChanged');
    }

  });

  context.ChatModel = ChatModel;

})(window.ChatApp);
