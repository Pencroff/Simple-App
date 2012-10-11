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
    'source/common'
], function ($, _, Backbone, ShadowModel, MainParamView, ShadowParamView, ExampleView, template, Common) {
    'use strict';
    var MainView = Backbone.View.extend({
        el: '#shadowView',
        template: _.template(template),
        events: {
            'click .add-row':	'addShadowRow'
        },
        initialize: function () {
            this.model = new ShadowModel();
            this.mainParamView = new MainParamView({el: '#main-param', model: this.model});
            this.shadowParamView = new ShadowParamView({el: '#shadow-param-collection', model: this.model});
            this.exampleView = new ExampleView({el: '#example', model: this.model});
            this.model.on('add', this.render, this);
            this.model.on('change', this.render, this);
            this.model.on('remove', this.render, this);
            this.render();
        },
        render: function () {
            this.mainParamView.render();
            this.shadowParamView.render();
            this.exampleView.render();
        },
        addShadowRow: function () {
            this.model.trigger('add-row');
        }
    });
    return MainView;
});