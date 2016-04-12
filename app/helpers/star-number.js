import Ember from 'ember';

export function starNumber(params) {
  console.log(params[0]);
  if(params[0]=== 1) {
    return Ember.String.htmlSafe('<p>1 star!</p>');
  }else if(params[0]===2){
    return Ember.String.htmlSafe('<p>2 stars!</p>');
  }else if(params[0]===3){
    return Ember.String.htmlSafe('<p>3 stars!</p>');
  }else if(params[0]===4){
    return Ember.String.htmlSafe('<p>4 stars!</p>');
  }else if(params[0]===5){
    return Ember.String.htmlSafe('<p>5 stars!</p>');
  }
}

export default Ember.Helper.helper(starNumber);
