/*global define*/
(function () {
	'use strict';

	define([
		'marionette',
		'underscore',
		'jquery',
		'app',
		'text!../../templates/paragraph.tpl',
	], function (Marionette, _, $, app, paragraphTemplate) {

		return  Marionette.ItemView.extend({

			tagName: 'span',

			template: paragraphTemplate,

			initialize: function (options) {
				_.bindAll(this, 'popcornInit', 'setFootNote', 'setWordClick');
				_.defer(this.popcornInit);
			},

			popcornInit: function() {
				this.setFootNote();
				this.setWordClick();
			},

			setFootNote: function () {
				app.popcorn.footnote({
					start: this.model.get('date-start'),
					end: this.model.get('date-end'),
					text: '',
					target: 'w' + this.model.get('id'),
					effect: "applyclass",
					applyclass: "selected"
			    });
			},

			setWordClick: function () {
				var audio = $(this.options.audioSelector);
				$('.word').click(function() {
				    audio[0].currentTime = parseFloat($(this).data('start'), 10);
				    audio[0].play();
				});
			}

		});

	});

})();
