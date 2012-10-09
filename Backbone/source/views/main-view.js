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
], function ($, _, Backbone, ShadowModel, MainParamModel, ShadowParamModel, ExampleView, template, Common) {
    'use strict';
    var MainView = Backbone.View.extend({
        el: '#shadowView',
        // Compile our stats template
        template: _.template(template),
        events: {
            'change .edit':	'updateOnChange',
            'keypress .edit': 'updateOnEnter'
        },
        initialize: function () {
            this.model = new ShadowModel();
            this.mainParamModel = new MainParamModel({el: '#main-param', model: this.model});
            this.shadowParamModel = new ShadowParamModel({el: '#shadow-param-collection', model: this.model});
            this.exampleView = new ExampleView({el: '#example', model: this.model});
            this.on('render', this.mainParamModel.render, this.mainParamModel);
            this.on('render', this.shadowParamModel.render, this.shadowParamModel);
            this.on('render', this.exampleView.render, this.exampleView);
            this.render();
        },
        render: function () {
            // Load the compiled HTML into the Backbone "el"
            //this.$el.html(this.renderTemplate());
            this.trigger('render');
        },
        renderTemplate: function () {
            var result,
                collection,
                params = {};
            collection = this.model.get("shadows").models;
            params.hShadow = collection[0].get('hShadow');
            params.vShadow = collection[0].get('vShadow');
            result = this.template(params);
            return result;
        },
        updateOnEnter: function (e) {
            // If you hit `enter`, we're through editing the item.
            if (e.keyCode === Common.ENTER_KEY) {
                this.updateModel();
                this.render();
            }
        },
        updateOnChange: function () {
            this.updateModel();
            this.render();
        },
        updateModel: function () {
            var collection = this.model.get("shadows").models;
            $('.edit').each(function (index, element) {
                var attr = element.getAttribute("data-field");
                collection[0].set(attr, element.value);
            });
        }
    });
    return MainView;
});