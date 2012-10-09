/**
 * Created with JetBrains WebStorm.
 * User: Sergei Danilov
 * Date: 02.10.12
 * Time: 15:59
 */

/*global define:true, Backbone:true,*/
define([
    'backbone'
], function () {
    'use strict';
    var SimpleShadow = Backbone.Model.extend({
        defaults: {
            hShadow: 1,
            vShadow: 2,
            blur: 3,
            color: '111',
            opacity: 0.9
        },
        initialize: function () {
        }
    });
    return SimpleShadow;
});