import Ember from 'ember';

export default Ember.Component.extend({
  showRating: false,

  actions: {
    show() {
      if(this.get('showRating')) {
        this.set('showRating', false);
      } else {
        this.set('showRating', true);
      }
    },

    saveRating() {
      var ratingParams = {
        festival: this.get('festival'),
        stars: parseInt(this.get('stars')),
        date: Date()
      };
      // console.log(ratingParams);
      this.sendAction('saveRating', ratingParams);
    }
  }
});
