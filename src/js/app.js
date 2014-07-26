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

		app.vent.on('routing:started', function() {
			Backbone.history.start();
		});

		return app;
	});
})();
