if (window.MutantBrowser === undefined) { window.MutantBrowser = {}; }

(function(context) {

  var MutantCollection = Backbone.Collection.extend({

  });

  context.MutantCollection = MutantCollection;

})(window.MutantBrowser);
