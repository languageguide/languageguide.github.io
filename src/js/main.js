/* global require*/
(function () {
	'use strict';

	var vendor_dir = '../../vendors/';

	requirejs.config({
		urlArgs: 'bust=' + Date.now(),
		paths: {
			jquery: vendor_dir + 'jquery-1.11.1.min',
			underscore: vendor_dir + 'underscore-min',
			backbone: vendor_dir + 'backbone-min',
			marionette: vendor_dir + 'backbone.marionette.min',
			text: vendor_dir + 'text',
			mustache: vendor_dir + 'mustache.min',
			localStorage: vendor_dir + 'backbone.localStorage-min'
		},
		shim: {
			backbone: {
				deps: ['underscore', 'jquery']
			},
			marionette: {
				deps: ['backbone']
			},
			localStorage: ['backbone']
		}
	});

	require([
		'app',
		'router',
		'routerController',
		'mustache',
		'marionette'
	], function (app, Router, routerController, Mustache, Marionette) {

		Marionette.Renderer.render = function(template, data){
			return Mustache.to_html(template, data);
		}

		app.addInitializer(function() {
			app.Router = new Router({
				controller: routerController
			});
			return app.vent.trigger("routing:started");
		});

		app.start();
	});

})();
