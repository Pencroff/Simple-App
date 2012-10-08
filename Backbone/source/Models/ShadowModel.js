/**
 * Created with JetBrains WebStorm.
 * User: Sergei Danilov
 * Date: 02.10.12
 * Time: 16:36
 */

/*global define:true, Backbone:true, SimpleShadow:true, SimpleShadowCollection:true*/
define([
    'underscore',
    'backbone',
    'source/models/SimpleShadow',
    'source/collections/SimpleShadowCollection'
],  function (_, Backbone, SimpleShadow, SimpleShadowCollection) {
    'use strict';
    var ShadowModel = Backbone.Model.extend({
        defaults: {
            shadows: null,
            background: 0xEEE,
            text: "Sample text"
        },
        initialize: function () {
            this.set('shadows', new SimpleShadowCollection());
            this.get('shadows').add(new SimpleShadow());
        }
    });
    return ShadowModel;
});