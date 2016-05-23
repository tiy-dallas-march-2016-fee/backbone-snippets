console.log('stuff');

var party = {
  address: '56789 Party St., Dallas, TX',

  start: function() {
    console.log('triggering event partytime');
    this.trigger('partytime');
  }
};

_.extend(party, Backbone.Events);

console.log(party);

function PartyGoer(name) {
  this.name = name;
}

PartyGoer.prototype.listenForParty = function(party) {
  var self = this;
  party.on('partytime', function() {
    console.log(self.name, 'is ready to party.');
  });
}

var wooderson = new PartyGoer('Wooderson');
var gregster = new PartyGoer('The Gregster');
var milton = new PartyGoer('Milton');

var people = [wooderson, gregster, milton];
people.forEach(person => person.listenForParty(party));


party.start();
