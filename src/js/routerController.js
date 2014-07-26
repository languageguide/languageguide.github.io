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
				require(['text!../media/text/' + title + '.htm'], function(textBook) {
					app.mainRegion.show(new MainView({
						model: new Backbone.Model({
							'audio-book': 'src/media/audio/' + title + '.mp3',
							'text-book': textBook
						})
					}));
				});
			},

			doHome: function () {
				console.log('do home', app);
			}
		};

	});

})();
