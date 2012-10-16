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
    var MainModel = Backbone.Model.extend({
        defaults: {
            text: "Sample text",
            color: 'fff',
            background: 'ccc',
            shadowStyle: '',
            collection: null
        },
        initialize: function () {
            this.on('add', this.refreshStyle, this);
            this.on('change', this.refreshStyle, this);
            this.on('remove', this.refreshStyle, this);
        },
        refreshStyle: function () {
            var collection = this.get('collection'),
                template = _.template('<%= hShadow %>px <%= vShadow %>px <%= blur %>px <%= fullColor %>'),
                pref = 'text-shadow:',
                result = '';
            if (collection.length !== 0) {
                _.each(collection.models, function (element) {
                    var curColor = element.get('color');
                    if (Common.isColor(curColor)) {
                        if (result !== '') {
                            result = ',' + result;
                        }
                        result = ' ' + template(element.toJSON()) + result;
                    }
                });
                result = pref + result + ';';
            } else {
                result = '';
            }
            this.set('shadowStyle', result);
        }
    });
    return MainModel;
});