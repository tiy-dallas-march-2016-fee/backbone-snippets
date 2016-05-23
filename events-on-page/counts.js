if (window.StoreApp === undefined) { window.StoreApp = {}; }

(function(context) {
  var store;

  function showInventoryCountInfo() {
    $('.inventory-count-value').html(store.items.length);
    $('.inventory-sale-count-value').html(store.calculateNumberOfItemsOnSale());
  }

  context.counts = {
    init: function(storeData) {
      store = storeData;

      showInventoryCountInfo();

      store.on('inventoryChange', showInventoryCountInfo);
    }
  };

})(window.StoreApp);
