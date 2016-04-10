import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('festival');
  },

  actions: {
    saveFestival(attributes) {
      var newFestival= this.store.createRecord('festival', attributes);
      newFestival.save();
    },
    deleteFestival(festival) {
      festival.destroyRecord();
    }
  }
});
