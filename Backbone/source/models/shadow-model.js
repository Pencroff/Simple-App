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
            color: 'fff',
            background: 'ccc',
            shadowStyle: ''
        },
        initialize: function () {
            var collection = new SimpleShadowCollection(),
                element;
            this.on('change', this.refreshStyle, this);
            element = new SimpleShadow();
            element.set({id: element.cid});
            collection.add(element);
            element = new SimpleShadow();
            element.set({id: element.cid});
            collection.add(element);
            element = new SimpleShadow();
            element.set({id: element.cid});
            collection.add(element);
            this.set('shadows', collection);
        },
        refreshStyle: function () {
            var collection = this.get("shadows").models,
                template = _.template('<%= hShadow %>px <%= vShadow %>px <%= blur %>px #<%= color %>'),
                pref = 'text-shadow:',
                result = '';
            _.each(collection, function (element) {
                if (result !== '') {
                    result = ',' + result;
                }
                result = ' ' + template(element.toJSON()) + result;
            });
            result = pref + result + ';';
            this.set('shadowStyle', result);
        }
    });
    return ShadowModel;
});