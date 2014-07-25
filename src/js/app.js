/* global */
(function () {
	'use strict';

	define([
		'jquery',
		'backbone',
		'marionette',
		'popcorn'
	], function ($, Backbone, Marionette) {

		var app = new Marionette.Application();

		app.addRegions({
			headerRegion: '#header',
			mainRegion: '#main',
			modal: '#modal'
		});

		app.addInitializer(function () {
			console.log(app.headerRegion);
		});

		return app;
	});
})();
