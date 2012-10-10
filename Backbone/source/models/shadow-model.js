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
    'source/collections/simple-shadows',
    'source/common'
],  function (_, Backbone, SimpleShadow, SimpleShadowCollection, Common) {
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
                template = _.template('<%= hShadow %>px <%= vShadow %>px <%= blur %>px <%= fullColor %>'),
                pref = 'text-shadow:',
                result = '';
            _.each(collection, function (element) {
                var curColor = element.get('color');
                if (Common.isColor(curColor)) {
                    if (result !== '') {
                        result = ',' + result;
                    }
                    result = ' ' + template(element.toJSON()) + result;
                }
            });
            result = pref + result + ';';
            this.set('shadowStyle', result);
        }
    });
    return ShadowModel;
});