if (window.CollectionApp === undefined) { window.CollectionApp = {}; }

(function(context) {

  var FoodListView = Backbone.View.extend({

    render: function() {

      var self = this;
      this.model.forEach(function(food) {
        var subview = new context.FoodItemView({ model: food });
        subview.render();
        self.$el.append(subview.el);
      });
      return this;
    }

  });

  context.FoodListView = FoodListView;

})(window.CollectionApp);
