import DS from 'ember-data';

export default DS.Model.extend({
  festival: DS.belongsTo('festival', {async:true}),
  stars: DS.attr()
});
