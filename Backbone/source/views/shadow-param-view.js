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
    'text!source/templates/shadow-param-template.html'
], function ($, _, Backbone, shadowParamTemplate) {
    'use strict';
    var ShadowParamView = Backbone.View.extend({
        template: _.template(shadowParamTemplate),
        initialize: function () {},
        render: function () {
            var collection, result = '';
            if (this.model === null) {
                return;
            }
            collection = this.model.get('shadows').models;
            _.each(collection, function (element) {
                result += this.template(element.toJSON());
            }, this);
            this.$el.html(result);
        }
    });
    return ShadowParamView;
});