if (window.StoreApp === undefined) { window.StoreApp = {}; }

(function(context) {

  //Data/Model setup

  var store = {
    items: [],

    updateInventoryList: function() {
      this.trigger('inventoryChange');
    },

    calculateNumberOfItemsOnSale: function() {
      var sum = 0;
      this.items.forEach(function(item) {
        if (item.isOnSale) {
          sum += 1;
        }
      });
      return sum;
    }
  };

  _.extend(store, Backbone.Events);

  function Item(name, quantity, price, salePrice) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.salePrice = salePrice;
  }

  _.extend(Item.prototype, Backbone.Events);

  Item.prototype.toggleSale = function() {
    this.isOnSale = !this.isOnSale;
    this.trigger('itemWentOnSale');
  }




  //Start the page

  function start() {

    var bread = new Item('bread', 10, 3.99, 3.49);
    var sword = new Item('sword', 2, 200.00, 149.99);
    var honeyOs = new Item("Honey O's", 20, 2.00, 1.89);

    store.items.push(bread);
    store.items.push(sword);
    store.items.push(honeyOs);

    store.listenTo(bread, 'itemWentOnSale', store.updateInventoryList);
    store.listenTo(sword, 'itemWentOnSale', store.updateInventoryList);
    store.listenTo(honeyOs, 'itemWentOnSale', store.updateInventoryList);

    context.list.init(store);
    context.counts.init(store);

  }

  context.start = start;

})(window.StoreApp);

window.StoreApp.start();
