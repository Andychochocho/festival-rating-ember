import Ember from 'ember';

export function reviewTime(params) {
  var festival = params[0];
  console.log(festival.get('ratings').get('length'));
  if(festival.get('ratings').get('length')>= 5) {
    return Ember.String.htmlSafe('<p>Popular festival!</p>');
  }
}

export default Ember.Helper.helper(reviewTime);
