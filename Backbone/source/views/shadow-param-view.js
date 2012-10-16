/**
 * Created with JetBrains WebStorm.
 * User: Sergei Danilov
 * Date: 09.10.12
 * Time: 17:51
 * File: shadow-param-view
 */

/*global define:true*/
define([
    'jquery',
    'underscore',
    'backbone',
    'source/models/simple-shadow',
    'text!source/templates/shadow-param-template.html'
], function ($, _, Backbone, SimpleShadow, shadowParamTemplate) {
    'use strict';
    var ShadowParamView = Backbone.View.extend({
        tagName:  'tr',
        template: _.template(shadowParamTemplate),
        initialize: function () {
            this.model.on('add-row', this.addRow, this);
            this.model.on('destroy', this.remove, this);
        },
        events: {
            'change .edit-row':	'updateModel',
            'click .delete-row': 'deleteRow'
        },
        render: function () {
            var result;
            if (this.model === null) {
                return;
            }
            result = this.template(this.model.toJSON());
            this.$el.html(result);
        },
        addRow: function () {
            var collection = this.model.get('shadows'),
                element = new SimpleShadow();
            collection.add(element);
            this.render();
            this.model.trigger('add');
        },
        updateModel: function (e) {
            var htmlElement = e.currentTarget,
                id = htmlElement.getAttribute("data-cid"),
                collection = this.model.get("shadows"),
                element = collection.getByCid(id),
                attr = htmlElement.getAttribute("data-field");
            element.set(attr, htmlElement.value);
            this.model.trigger('change');
        },
        deleteRow: function (e) {
            this.model.destroy();
        }
    });
    return ShadowParamView;
});