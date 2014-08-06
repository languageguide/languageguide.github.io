/*glocal define*/
(function () {
	'use strict';

	define([
		'marionette',
		'app',
		'text!../../templates/bookList.tpl',
		'views/bookItemView'
	], function (Marionette, app, chapterTemplate, BookItemView) {

		return Marionette.CompositeView.extend({

			childViewContainer: 'ul.book-list',

			childView: BookItemView,

			template: chapterTemplate

		});

	});
})();
