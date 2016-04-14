import Ember from 'ember';

export default Ember.Route.extend({
  favoriteFestival: Ember.inject.service(),
  model() {
    return this.store.findAll('festival');
  },

  actions: {
    saveFestival(attributes) {
      console.log("test");
      var newFestival= this.store.createRecord('festival', attributes);
      newFestival.save();
    },
    deleteFestival(festival) {
      festival.destroyRecord();
    },
    favoritesAdded(festival) {
      this.get('favoriteFestival').add(festival);
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
