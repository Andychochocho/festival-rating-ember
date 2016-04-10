import Ember from 'ember';

export default Ember.Component.extend({
  favoriteFestival: Ember.inject.service(),
  favoriteCount: Ember.computed('favoriteFestival.festivals.length', function(){
    return this.get('favoriteFestival').festivals.length;
  }),

  actions: {
    saveFestival() {
      var attributes = {
        name: this.get('name'),
        description: this.get('description'),
        image: this.get('image'),
      };
      this.sendAction('saveFestival', attributes);
    }
  }
});
