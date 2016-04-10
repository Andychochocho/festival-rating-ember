import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('festival');
    return this.store.findAll('reviews');
  },

  actions: {
    saveFestival(attributes) {
      var newFestival= this.store.createRecord('festival', attributes);
      newFestival.save();
    },
    deleteFestival(festival) {
      festival.destroyRecord();
    },
    saveRating(reviewParams) {
      var newRating = this.store.createRecord('rating', reviewParams);
      var festival = reviewParams.festival;
      festival.get('ratings').addObject(newRating);
      newRating.save().then(function () {
        return festival.save();
      });
    }
  }
});
