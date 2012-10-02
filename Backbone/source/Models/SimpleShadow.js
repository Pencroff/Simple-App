/**
 * Created with JetBrains WebStorm.
 * User: Sergei Danilov
 * Date: 02.10.12
 * Time: 15:59
 */

/*global Backbone:true,*/

var SimpleShadow = Backbone.Model.extend({
    defaults: {
        hShadow: 1,
        vShadow: 1,
        blur: 0,
        color: 0x000,
        opacity: 1
    },
    initialize: function () {
        'use strict';
    }
});