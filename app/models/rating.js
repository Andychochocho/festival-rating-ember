import DS from 'ember-data';

export default DS.Model.extend({
  stars: DS.attr(),
  festival: DS.belongsTo('festival', {async:true}),
  date: DS.attr()
});
