/* global */
(function () {
	'use strict';

	define([
		'jquery',
		'backbone',
		'router',
		'routerController',
		'marionette',
		'views/mainView',
		'popcorn'
	], function ($, Backbone, Router, routerController, Marionette, MainView) {

		var app = new Marionette.Application();

		app.addRegions({
			headerRegion: '#header',
			mainRegion: '#main',
			modal: '#modal'
		});

		app.addInitializer(function () {
			new Router({
				controller: routerController
			});

			// TODO it seems to do not work with pushState parameter
			Backbone.history.start({});

			// TODO I should move this code into a trigger callback
			app.mainRegion.show(new MainView({
				model: new Backbone.Model({
					'audio-src': 'src/audio/01.mp3'
				})
			}));
		});

		return app;
	});
})();
