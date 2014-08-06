/*glocal define*/
(function () {
	'use strict';

	define([
		'marionette',
		'app',
		'text!../../templates/chapter.tpl',
		'views/paragraphView'
	], function (Marionette, app, chapterTemplate, ParagraphView) {

		return Marionette.CompositeView.extend({

			childViewContainer: 'div#text',

			childView: ParagraphView,

			template: chapterTemplate,

			childViewOptions: {
				audioSelector: '#audio'
			},

			initialize: function () {
				_.bindAll(this, 'popcornInit');
				_.defer(this.popcornInit);
			},

			popcornInit: function () {
				app.vent.trigger('audioLoaded', this.childViewOptions.audioSelector);
			}

		});

	});
})();
