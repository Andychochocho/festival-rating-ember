import Ember from 'ember';

export default Ember.Component.extend({
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
