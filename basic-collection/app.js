if (window.CollectionApp === undefined) { window.CollectionApp = {}; }

(function(context) {

  console.log('context is here!', context);

  var list = [
    new context.FoodModel({ name: 'Steak', rating: 11 }),
    new context.FoodModel({ name: 'Shrimp', rating: 10 }),
    new context.FoodModel({ name: 'Wings', rating: 8 }),
    new context.FoodModel({ name: 'Cheap Shrimp Fried Rice', rating: 7 }),
    new context.FoodModel({ name: 'Pulled Pork', rating: 8 }),
    new context.FoodModel({ name: 'Tofu', rating: 1 })
  ];

  var collection = new context.FoodCollection(list);

  console.log(collection.toJSON());

  var foodListView = new context.FoodListView({ model: collection, el: $('#food-list') });
  foodListView.render();




})(window.CollectionApp);
