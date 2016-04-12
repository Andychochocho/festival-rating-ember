import Ember from 'ember';

export default Ember.Component.extend({
  favoriteFestival: Ember.inject.service(),
  favoriteCount: Ember.computed('favoriteFestival.festivals.length', function(){
    return this.get('favoriteFestival').festivals.length;
  }),

  favoriteList: Ember.computed('favoriteFestival.festivals', function() {
    // console.log('List of favorites: ' + this.get('favoriteFestival.festivals'));
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
