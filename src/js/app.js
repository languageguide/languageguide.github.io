/* global */
(function () {
	'use strict';

	define([
		'jquery',
		'backbone',
		'marionette'
	], function ($, Backbone, Marionette) {

		var app = new Marionette.Application();

		app.addRegions({
			headerRegion: '#header',
			mainRegion: '#main',
			modal: '#modal'
		});

		app.vent.on('routing:started', function() {
			Backbone.history.start({
				pushState: false
			});
		});

		app.vent.on('audioLoaded', function (audioSelector) {
			app.popcorn = Popcorn(audioSelector);
		});

		return app;
	});
})();
