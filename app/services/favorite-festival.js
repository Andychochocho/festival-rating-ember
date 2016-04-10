import Ember from 'ember';

export default Ember.Service.extend({
  festivals: [],

  add(festival) {
    this.get('festivals').pushObject(festival);
  }
});
