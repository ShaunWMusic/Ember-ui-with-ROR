import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  // host: 'http://localhost:3000'
  host: 'https://ember-api-ror.herokuapp.com/'
});
