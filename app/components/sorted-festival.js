import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['reviews.length:asc'],
  sortedFestivals: Ember.computed.sort('model', 'sortBy'),
  actions: {
    saveRating(params) {
      this.sendAction('saveRating', params);
    },
    deleteFestival(festival){
      this.sendAction('deleteFestival', festival)
    }
  }
});
