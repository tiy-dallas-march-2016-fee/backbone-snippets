console.log('hello Jacolby');

var NameModel = Backbone.Model.extend({
  defaults: {
    'name': 'Jacolby'
  }
});

var SelfEditingView = Backbone.View.extend({
  initialize: function() {
    this.mode = 'display';
    this.render();
  },

  events: {
    'click button': 'editButtonClicked',
    'keyup input': 'inputKeyup'
  },

  editButtonClicked: function() {
    this.mode = 'edit';
    this.render();
  },

  inputKeyup: function(evt) {
    if (evt.keyCode === 13) {

      var value = evt.target.value;
      this.model.set('name', value);

      this.mode = 'display';
      this.render();
    }
  },

  render: function() {
    console.log('mode', this.mode);

    if (this.mode === 'display') {
      this.$el.html('<p>Name: ' + this.model.get('name') + '</p><button>edit</button>');
    }
    else {
      this.$el.html('<input type="text" placeholder="name" value="' + this.model.get('name') + '" />');
    }
  }
});


var nameModel = new NameModel({ name: 'Eric' }); //overrides default name here
var view = new SelfEditingView({ el: $('#self-editor'), model: nameModel })
