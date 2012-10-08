/**
 * Created with JetBrains WebStorm.
 * User: Sergei Danilov
 * Date: 02.10.12
 * Time: 16:40
 */

/*global define:true, $:true, Backbone:true, SimpleShadow:true*/
define([
    'jquery',
    'underscore',
    'backbone',
    'source/models/ShadowModel',
    'text!source/templates/ShadowTemplate.html',
    'common'
], function ($, _, Backbone, ShadowModel, template, Common) {
    'use strict';
    var ShadowView = Backbone.View.extend({
        el: $("#shadowView"),
        // Compile our stats template
        template: _.template(template),
        events: {
            'change .edit':	'updateOnChange',
            'keypress .edit':	'updateOnEnter'
        },
        initialize: function () {
            this.model = new ShadowModel();
            this.render();
        },
        render: function () {
            // Load the compiled HTML into the Backbone "el"
            this.$el.html(this.renderTemplate());
        },
        renderTemplate: function () {
            var result,
                collection,
                params = {};
            collection = this.model.get("shadows").models;
            params.hShadow = collection[0].get('hShadow');
            params.vShadow = collection[0].get('vShadow');
            result = this.template(params);
            return result;
        },
        updateOnEnter: function (e) {
            // If you hit `enter`, we're through editing the item.
            if (e.keyCode === Common.ENTER_KEY) {
                this.updateModel();
                this.render();
            }
        },
        updateOnChange: function () {
            this.updateModel();
            this.render();
        },
        updateModel: function () {
            var collection = this.model.get("shadows").models;
            $('.edit').each(function (index, element) {
                var attr = element.getAttribute("data-field");
                collection[0].set(attr, element.value);
            });
        }
    });
    return ShadowView;
});