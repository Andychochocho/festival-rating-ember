import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteFestival(festival) {
      this.sendAction('deleteFestival', festival);
    }
  }
});
