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
        template: _.template(template),
        initialize: function () {
            this.model = new ShadowModel();
            this.mainParamView = new MainParamView({el: '#main-param', model: this.model});
            this.shadowParamView = new ShadowParamView({el: '#shadow-param-collection', model: this.model});
            this.exampleView = new ExampleView({el: '#example', model: this.model});
            this.model.on('change', this.render, this);
            this.mainParamView.render();
            this.shadowParamView.render();
            this.render();
        },
        render: function () {
            this.exampleView.render();
        }
    });
    return MainView;
});