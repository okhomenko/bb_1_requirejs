
define([

  // Libs
  'backbone',

  // Deps
  './item'

], function(Backbone, ItemView) {

  var View = Backbone.View.extend({

    views: [],

    initialize: function() {
      _.bindAll(this);
      this.collection.on('reset', this.renderAll);
    },

    renderAll: function() {
      var _this = this;

      this.collection.each(function(model){
        var view = new ItemView({model: model});
        _this.views.push(view);

        var content = view.render().el;
        _this.$('.list').append(content);
      });
      

    },

    render: function() {
      this.$el.html('<h1>Stations</h1><ul class=list></ul>');
      return this;
    }

  });

  return View;

});

