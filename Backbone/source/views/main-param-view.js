/**
 * Created with JetBrains WebStorm.
 * User: Sergei Danilov
 * Date: 09.10.12
 * Time: 12:40
 * File: main-param-view
 */

/*global define:true*/
define([
    'jquery',
    'underscore',
    'backbone',
    'text!source/templates/main-param-template.html'
], function ($, _, Backbone, mainParamTemplate) {
    'use strict';
    var MainParamView = Backbone.View.extend({
        template: _.template(mainParamTemplate),
        initialize: function () {},
        render: function () {
            if (this.model === null) {
                return;
            }
            this.$el.html(this.template(this.model.toJSON()));
        }
    });
    return MainParamView;
});
