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
        stars: this.get('stars')
      };
      this.sendAction('saveRating', ratingParams);
    }
  }
});
