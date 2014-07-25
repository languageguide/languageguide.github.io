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
			marionette: vendor_dir + 'backbone.marionette.min'
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
		'app'
	], function (app) {

		app.start();

	});

})();
