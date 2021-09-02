/**
 Resources view StackView for navigation selection
 @class ResourcesView
 @constructor
 @return {Object} instantiated ResourcesView
 **/
define(['jquery', 'backbone'], function ($, Backbone) {

    var ResourcesView = Backbone.View.extend({

        /**
         Constructor
         @method initialize
         **/
        initialize: function () {
            var self = this;
            self.listenTo(self.options.stackView, BB.EVENTS.SELECTED_STACK_VIEW, function (e) {
                if (e == self)
                    self._render();
            });
        },

        /**
         Render the ResourceList View
         @method _render
         **/
        _render: function () {
            /* Example of how to load modules on first render only
            if (!self.m_resourceListView) {
                require(['ResourceListView'], function (ResourceListView) {
                    self.m_resourceListView = new ResourceListView({el: Elements.RESOURCES_LIST_VIEW });
                });
            }*/
        }
    });

    return ResourcesView;
});

