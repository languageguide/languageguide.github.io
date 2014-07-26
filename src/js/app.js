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

		app.addInitializer(function () {
			console.log(app.headerRegion);
			app.mainRegion.show(new MainView({
				// TODO use the route to load the appropriate model
				model: new Backbone.Model({
					'audio-src': 'src/audio/01.mp3'
				})
			}));
		});

		return app;
	});
})();
