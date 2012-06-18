
define([

  // Libs
  'backbone',

  // Deps
  '../models/station'

], function(Backbone, Model) {

  var Collection = Backbone.Collection.extend({
    model: Model,
    url: '/stations.json'
  });

  return Collection;

});
