/**
 * Created with JetBrains WebStorm.
 * User: Sergei Danilov
 * Date: 02.10.12
 * Time: 16:36
 */

/*global Backbone:true, SimpleShadow:true*/

var ShadowModel = Backbone.Model.extend({
    defaults: {
        shadows: new SimpleShadow(),
        background: 0xEEE,
        text: "Sample text"
    },
    initialize: function () {
        'use strict';
    }
});