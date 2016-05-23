if (window.StoreApp === undefined) { window.StoreApp = {}; }

(function(context) {
  var store;

  function showInventoryList() {
    var htmlTemplate = $('#item-template').html();
    var templateFunc = _.template(htmlTemplate);

    $('.inventory').html('');
    store.items.forEach(function(item, index) {

      var price = item.price;
      if (item.isOnSale) {
        price = item.salePrice;
      }

      var html = templateFunc({ name: item.name, price: price, index: index });
      $('.inventory').append(html);
    });
  }

  context.list = {
    init: function(storeData) {
      store = storeData;
      showInventoryList();

      $('.inventory').on('click', 'button', function() {
        var index = $(this).data('index');
        var item = store.items[index];
        item.toggleSale();
      });

      store.on('inventoryChange', showInventoryList);
    }
  };

})(window.StoreApp);
