if (window.MutantBrowser === undefined) { window.MutantBrowser = {}; }

(function(context) {

  var data = [
    new context.Mutant({ id: 7, name: 'Charles Xavier', power: 'telepathy', team: 'x-men' }),
    new context.Mutant({ id: 2, name: 'Magneto', power: 'control over magnetism', team: 'brotherhood of mutants' }),
    new context.Mutant({ id: 3, name: 'Wolverine', power: 'regeneration', team: 'x-men' }),
    new context.Mutant({ id: 4, name: 'Jean Grey', power: 'telepathy, telekenesis', team: 'x-men' }),
    new context.Mutant({ id: 55, name: 'Wade Wilson', power: 'regeneration', team: 'x-men' }),
    new context.Mutant({ id: 6, name: 'Sabretooth', power: 'strength, regeneration', team: 'brotherhood of mutants' }),
    new context.Mutant({ id: 1, name: 'Mystique', power: 'shape-changing', team: 'brotherhood of mutants' }),
    new context.Mutant({ id: 8978, name: 'Blob', power: 'big, fat', team: 'brotherhood of mutants' })
  ];

  var mutants = new context.MutantCollection(data);

  var $container = $('#app-container');

  var detailView = new context.DetailView({ el: $container });
  var masterView = new context.MasterView({ el: $container, model: mutants });

  var MutantRoutes = Backbone.Router.extend({

    routes: {
      'list': 'list',
      'detail/:id': 'detail'
    },

    list: function() {
      masterView.render();
    },

    detail: function(id) {
      var mutant = mutants.findWhere({ id: Number(id) });
      detailView.model = mutant;
      detailView.render();
    }

  });

  var routes = new MutantRoutes();
  context.Router = routes;
  Backbone.history.start();

})(window.MutantBrowser);
