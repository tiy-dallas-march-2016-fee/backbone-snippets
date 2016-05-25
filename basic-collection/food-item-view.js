if (window.CollectionApp === undefined) { window.CollectionApp = {}; }

(function(context) {

  var FoodItemView = Backbone.View.extend({
    tagName: 'li',

    inititialize: function() {
      var self = this;
      /*
      this.model.on('change', function() {
        console.log('change happened!');
        self.render();
      });
      */
    },

    events: {
      'click': 'clicked'
    },

    clicked: function() {
      var isSelected = this.model.get('isSelected');
      if (isSelected) {
        this.model.set('isSelected', false);
      }
      else {
        this.model.set('isSelected', true);
      }

      this.render();
    },

    render: function() {
      console.log('rendering', this.model.get('name'));
      if (this.model.get('isSelected')) {
        this.$el.addClass('active');
      }
      else {
        this.$el.removeClass('active');
      }
      this.$el.html(this.model.get('name'))
    }
  });

  context.FoodItemView = FoodItemView;

})(window.CollectionApp);
