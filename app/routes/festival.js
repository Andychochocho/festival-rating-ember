import Ember from 'ember';

export default Ember.Route.extend({
  ///sorting by stars
  sortBy: ['stars.asc'],
  sortedRatings: Ember.computed.sort('festival.ratings', 'sortBy'),
  model(festival) {
    return this.store.findRecord('festival', festival.festival_id);
  },
  actions: {
    saveRating(reviewParams) {
      var newRating = this.store.createRecord('rating', reviewParams);
      var festival = reviewParams.festival;
      festival.get('ratings').addObject(newRating);
      newRating.save().then(function() {
        return festival.save();
      });
    }
  }
});
