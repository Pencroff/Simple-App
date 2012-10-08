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
    'text!source/templates/ShadowTemplate.html'
], function ($, _, Backbone, ShadowModel, template) {
    'use strict';
    var ShadowView = Backbone.View.extend({
        el: $("#shadowView"),
        // Compile our stats template
        template: _.template(template),
        initialize: function () {
            this.model = new ShadowModel();
            this.render();
        },
        render: function () {
            // Load the compiled HTML into the Backbone "el"
            this.$el.html(
                this.template({
                    hShadow: 1,
                    vShadow: 5
                })
            );
        },
        renderTemplate: function () {
//            var result,
//                params = {};
//            params.hShadow = this.model.
        }
    });
    return ShadowView;
});