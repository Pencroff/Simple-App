/**
 * Created with JetBrains WebStorm.
 * User: Sergei Danilov
 * Date: 02.10.12
 * Time: 16:40
 */

/*global define:true, $:true, Backbone:true, SimpleShadow:true*/
define([
    'jquery',
    'underscore',
    'backbone',
    'source/models/shadow-model',
    'source/views/main-param-view',
    'source/views/shadow-param-view',
    'source/views/example-view',
    'text!source/templates/main-template.html',
    'common'
], function ($, _, Backbone, ShadowModel, MainParamView, ShadowParamView, ExampleView, template, Common) {
    'use strict';
    var MainView = Backbone.View.extend({
        el: '#shadowView',
        // Compile our stats template
        template: _.template(template),
//        events: {
//            'change .edit':	'updateOnChange',
//            'keypress .edit': 'updateOnEnter'
//        },
        initialize: function () {
            this.model = new ShadowModel();
            this.mainParamView = new MainParamView({el: '#main-param', model: this.model});
            this.shadowParamView = new ShadowParamView({el: '#shadow-param-collection', model: this.model});
            this.exampleView = new ExampleView({el: '#example', model: this.model});
            this.on('render:main', this.mainParamView.render, this.mainParamView);
            this.on('render:shadow', this.shadowParamView.render, this.shadowParamView);
            this.on('render:example', this.exampleView.render, this.exampleView);
            this.mainParamView.on('change:main', this.render);
            this.shadowParamView.on('change:shadow', this.render);
            this.render();
        },
        render: function () {
            this.trigger('render:main');
            this.trigger('render:shadow');
            this.trigger('render:example');
        }
//        renderTemplate: function () {
//            var result,
//                collection,
//                params = {};
//            collection = this.model.get("shadows").models;
//            params.hShadow = collection[0].get('hShadow');
//            params.vShadow = collection[0].get('vShadow');
//            result = this.template(params);
//            return result;
//        },
//        updateOnEnter: function (e) {
//            // If you hit `enter`, we're through editing the item.
//            if (e.keyCode === Common.ENTER_KEY) {
//                this.updateModel();
//                this.render();
//            }
//        },
//        updateOnChange: function () {
//            this.updateModel();
//            this.render();
//        },
//        updateModel: function () {
//            var collection = this.model.get("shadows").models;
//            $('.edit').each(function (index, element) {
//                var attr = element.getAttribute("data-field");
//                collection[0].set(attr, element.value);
//            });
//        }
    });
    return MainView;
});