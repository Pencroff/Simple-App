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
    'source/models/main-model',
    'source/collections/simple-shadows',
    'source/views/main-param-view',
    'source/views/shadow-param-view',
    'source/views/example-view',
    'text!source/templates/main-template.html',
    'source/common'
], function ($, _, Backbone, MainModel, ShadowCollection, MainParamView, ShadowParamView, ExampleView, template, Common) {
    'use strict';
    var MainView = Backbone.View.extend({
        el: '#shadowView',
        template: _.template(template),
        events: {
            'click .add-row':	'addShadowRow'
        },
        initialize: function () {
            this.mainView = new MainParamView({el: '#main-param', model: this.model.main });
            this.mainView.render();
//            $('#main-param').html(mainView.el);
//            this.mainParamView = new MainParamView({el: '#main-param', model: this.model});
//            this.shadowParamView = new ShadowParamView({el: '#shadow-param-collection', model: this.model});
            this.exampleView = new ExampleView({el: '#example', model: this.model});
            this.exampleView.render();
            this.model.shadows.on('add', this.showNewShadowRow, this);
            this.model.shadows.on('change', this.model.main.refreshStyle, this.model.main);
            this.model.main.on('change', this.render, this);
//            this.model.on('add', this.render, this);
//            this.model.on('change-single-model', this.render, this);
//            this.model.on('remove', this.render, this);
            //this.render();
        },
        render: function () {
            this.exampleView.render();
        },
        newSimpleAttributes: function () {
            return {
                hShadow: 0,
                vShadow: 0,
                blur: 0,
                color: '000',
                fullColor: '',
                opacity: '1.0'
            };
        },
        addShadowRow: function () {
            this.model.shadows.create(this.newSimpleAttributes());
            //this.model.trigger('add-row');
        },
        showNewShadowRow: function (simpleShadow) {
            var view = new ShadowParamView({ model: simpleShadow });
            view.render();
            $('#shadow-param-collection').append(view.el);
        }
    });
    return MainView;
});