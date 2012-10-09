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
            color: '537',
            background: 'AEC'
        },
        initialize: function () {
            var collection = new SimpleShadowCollection(),
                element;
            this.set('shadows', collection);
            element = new SimpleShadow();
            element.set({id: element.cid});
            collection.add(element);
            element = new SimpleShadow();
            element.set({id: element.cid});
            collection.add(element);
            element = new SimpleShadow();
            element.set({id: element.cid});
            collection.add(element);
        }
    });
    return ShadowModel;
});