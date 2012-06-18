
requirejs([

  // Libs
  'jquery',

  // Deps
  'modules/stations/collections/stations',
  'modules/stations/views/list'

], function($, Stations, ListView) {

  var collection = new Stations;

  var view = new ListView({
    collection: collection
  });
  $('#container').append(view.render().el);

  collection.fetch();

});