/* global require*/
(function () {
	'use strict';

	var vendor_dir = '../../vendors/';

	requirejs.config({
		urlArgs: 'bust=' + Date.now(),
		paths: {
			jquery: vendor_dir + 'jquery-1.11.1.min',
			popcorn: vendor_dir + 'popcorn-complete.min',
			underscore: vendor_dir + 'underscore-min',
			backbone: vendor_dir + 'backbone-min',
			marionette: vendor_dir + 'backbone.marionette.min',
			text: vendor_dir + 'text',
			mustache: vendor_dir + 'mustache.min'
		},
		shim: {
			backbone: {
				deps: ['underscore', 'jquery']
			},
			marionette: {
				deps: ['backbone']
			}
		}
	});

	require([
		'app',
		'mustache',
		'marionette'
	], function (app, Mustache) {

	Marionette.Renderer.render = function(template, data){
		return Mustache.to_html(template, data);
	}

		app.start();

	});

})();
