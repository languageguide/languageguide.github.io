/*global define*/
(function () {
	'use strict';

	define([
		'backbone',
		'app',
		'views/chapterView',
		'collections/books',
		'collections/paragraphs'
	], function (Backbone, app, ChapterView, BooksCollection, ParagraphsCollection) {

		// TODO the collection should be not loaded here but by using events;
		var collection = new ParagraphsCollection();
		localStorage.clear();

		return  {

			doBook: function (title) {
				require(['text!../media/' + title + '.htm'], function(textBook) {
					app.mainRegion.show(new ChapterView({
						model: new Backbone.Model({
							'audio-book': 'src/media/' + title + '.mp3',
							'text-book': textBook
						}),
						collection: collection
					}));
				});
			},

			doHome: function () {
				app.books = new BooksCollection();
				app.books.fetch({
					// TODO add a new view to list all the titles
					success: function () {
						console.log('do home', app, app.books);
					}
				});
			}
		};

	});

})();
