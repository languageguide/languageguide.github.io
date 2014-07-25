/* global require*/
(function () {
	'use strict';

	var vendor_dir = '../../vendors/';

	requirejs.config({
		urlArgs: 'bust=' + Date.now(),
		paths: {
			jquery: vendor_dir + 'jquery-1.11.1.min',
			popcorn: vendor_dir + 'popcorn-complete.min'
		},
		shim: {
		}
	});

	require([
		'app'
	], function (app) {

		app.start();

	});

})();
