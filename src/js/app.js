/* global */
(function () {
	'use strict';

	define([
		'jquery',
		'backbone',
		'marionette',
		'views/mainView',
		'popcorn'
	], function ($, Backbone, Marionette, MainView) {

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
