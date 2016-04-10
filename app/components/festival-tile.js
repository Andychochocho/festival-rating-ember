import Ember from 'ember';

export default Ember.Component.extend({
  favoriteFestival: Ember.inject.service(),
  actions: {
    deleteFestival(festival) {
      this.sendAction('deleteFestival', festival);
    }
  }
});
