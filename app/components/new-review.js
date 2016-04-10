import Ember from 'ember';

export default Ember.Component.extend({
  showFestival: false,

  actions: {
    show() {
      if(this.get('showFestival')) {
        this.set('showFestival', false);
      } else {
        this.set('showFestival', true);
      }
    }
  }
});
