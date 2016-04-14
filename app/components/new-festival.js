import Ember from 'ember';

export default Ember.Component.extend({
  favoriteFestival: Ember.inject.service(),

  favoriteCount: Ember.computed('favoriteFestival.festivals.length', function(){
    return this.get('favoriteFestival').festivals.length;
  }),

  favoriteList: Ember.computed('favoriteFestival.festivals.length', function () {
    var words = "";
    var list = this.get('favoriteFestival').festivals;
    console.log(list);
    for(var i = 0; i<list.length;i++) {
      words += list[i]._internalModel._data.name + ", "
    }

    return words
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
