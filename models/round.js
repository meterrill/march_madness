MarchMadness.Round = DS.Model.extend({
  roundNumber: DS.attr(),
  roundName: DS.attr(),
  bracket: DS.belongsTo('bracket', {async: true})
});
