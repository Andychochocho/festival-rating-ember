import Ember from 'ember';

export function reviewTime(params) {
  var festival = params[0];
  festival.get('ratings').get('length'));
  if(business.get('ratings').get('length')) >= 5 {
    return Ember.String.htmlSafe('<p>Popular festival!</p>');
  }
}
export default Ember.Helper.helper(reviewTime);
