import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  // localhost
  host: 'http://localhost:3000'
  // Production API
  // host: 'https://fierce-earth-79141.herokuapp.com'
});
