/*global define*/
(function () {
	'use strict';

	define([
		'backbone',
		'app',
		'views/mainView',
		'collections/books'
	], function (Backbone, app, MainView, BooksCollection) {

		return  {

			doBook: function (title) {
				console.log('book title', title, app);
				require(['text!../media/' + title + '.htm'], function(textBook) {
					app.mainRegion.show(new MainView({
						model: new Backbone.Model({
							'audio-book': 'src/media/' + title + '.mp3',
							'text-book': textBook
						})
					}));
				});
			},

			doHome: function () {
				app.books = new BooksCollection();
				app.books.fetch({
					success: function () {
						console.log('do home', app, app.books);
					}
				});
			}
		};

	});

})();
