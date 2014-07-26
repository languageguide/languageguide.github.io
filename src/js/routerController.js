/*global define*/
(function () {
	'use strict';

	define([
		'backbone',
		'app',
		'views/mainView'
	], function (Backbone, app, MainView) {

		return  {

			doBook: function (title) {
				console.log('book title', title, app);
				app.mainRegion.show(new MainView({
					model: new Backbone.Model({
						'audio-src': 'src/audio/01.mp3'
					})
				}));
			},

			doHome: function () {
				console.log('do home', app);
			}
		};

	});

})();
