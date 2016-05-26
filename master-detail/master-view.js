if (window.MutantBrowser === undefined) { window.MutantBrowser = {}; }

(function(context) {

  var MasterView = Backbone.View.extend({

    events: {
      'click li': 'mutantClicked'
    },

    mutantClicked: function(evt) {
      var $target = $(evt.target);
      var id = $target.data('id');
      console.log(id);
      context.Router.navigate('detail/' + id, { trigger: true });
    },

    render: function() {

      var html = '<ul>';

      this.model.forEach(function(mutant) {
        var li = '<li data-id="' + mutant.get('id') + '">' + mutant.get('name') + '</li>';
        console.log(li);
        html += li;
      });

      html += '</ul>'

      this.$el.html(html);
      return this;
    }
  });

  context.MasterView = MasterView;

})(window.MutantBrowser);
