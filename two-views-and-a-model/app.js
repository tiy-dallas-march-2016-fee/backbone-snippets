if (window.ChatApp === undefined) { window.ChatApp = {}; }

(function(context) {

  console.log('context', context);

  var chatModel = new context.ChatModel();

  var headerView = new context.HeaderView({ el: $('.messages'), model: chatModel });
  var chatView = new context.ChatView({ el: $('#chat-view'), model: chatModel });

})(window.ChatApp);
