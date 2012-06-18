
define([

  // Libs
  'backbone',

  'text!../templates/item.html'

], function(Backbone, ItemTemplate) {

  var View = Backbone.View.extend({

    tagName: 'li',
    className: 'item',

    template: _.template(ItemTemplate),

    events: {
      'click .name': 'clickName',
      'click .id': 'clickId',
      'click .remove': 'removeModel'
    },

    initialize: function() {
      _.bindAll(this);
      this.model.on('destroy', this.remove);
    },

    render: function() {
      var content = this.template(this.model.toJSON());
      this.$el.html(content);
      return this;
    },

    clickName: function() {
      console.log(this.model.get('id'));
    },

    clickId: function() {
      console.log(this.model.get('name'));
    },

    removeModel: function() {
      this.model.destroy();
    }

  });

  return View;

});