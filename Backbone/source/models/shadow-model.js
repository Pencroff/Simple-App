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
            background: 'AEC',
            shadowStyle: ""
        },
        initialize: function () {
            var collection = new SimpleShadowCollection(),
                element;
            this.on('change', this.refreshStyle, this);
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
        },
        /*Example text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135;*/
        refreshStyle: function () {
            var collection = this.get("shadows"),
                template = _.template('<%= hShadow %>"px <%= vShadow %>"px <%= blur %>"px <%= color %>"px'),
                pref = 'text-shadow:',
                result = '';
            _.each(collection, function (element) {
                result += ',';
                result += template(element);
            });
            result = pref + result + ';';
            this.set('shadowStyle', result);
        }
    });
    return ShadowModel;
});