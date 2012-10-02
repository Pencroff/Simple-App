/**
 * Created with JetBrains WebStorm.
 * User: Sergei Danilov
 * Date: 02.10.12
 * Time: 16:40
 */

/*global $:true, Backbone:true, SimpleShadow:true*/

var ShadowView = Backbone.View.extend({
    el: $("#parameters"),
    initialize: function () {
        'use strict';
        this.render();
    },
    render: function () {
        'use strict';
        // Compile the template using underscore
        var template = _.template( $("#search_template").html(), {} );
        // Load the compiled HTML into the Backbone "el"
        this.el.html( template );
    },
    events: {
        "click input[type=button]": "doSearch"
    },
    doSearch: function (event) {
        'use strict';
        // Button clicked, you can access the element that was clicked with event.currentTarget
    }
});