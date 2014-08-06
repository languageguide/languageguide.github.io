/*global define*/
(function () {
	'use strict';

	define([
		'backbone',
		'app',
		'views/chapterView',
		'views/bookListCompositeView',
		'collections/books',
		'collections/paragraphs'
	], function (Backbone, app, ChapterView, BookListCompositeView, BooksCollection, ParagraphsCollection) {

		// TODO I should find a relation between BooksCollection and ParagraphsCollection
		// TODO the collection should be not loaded here but by using events;
		var collection = new ParagraphsCollection();
		// TODO remove the localStorage clear command;
		localStorage.clear();

		return  {

			doBook: function (title) {
				app.mainRegion.show(new ChapterView({
					model: new Backbone.Model({
						'audio-book': 'src/media/' + title + '.mp3'
					}),
					collection: collection
				}));
			},

			doHome: function () {
				app.books = new BooksCollection();
				app.books.fetch({
					// TODO add a new view to list all the titles
					success: function () {
						app.mainRegion.show(new BookListCompositeView({
							collection: app.books
						}));
					}
				});
			}
		};

	});

})();
