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
    'source/models/simple-shadow',
    'source/collections/simple-shadows'
],  function (_, Backbone, SimpleShadow, SimpleShadowCollection) {
    'use strict';
    var ShadowModel = Backbone.Model.extend({
        defaults: {
            shadows: null,
            text: "Sample text",
            color: 0x333,
            background: 0xEEE
        },
        initialize: function () {
            this.set('shadows', new SimpleShadowCollection());
            this.get('shadows').add(new SimpleShadow());
        }
    });
    return ShadowModel;
});