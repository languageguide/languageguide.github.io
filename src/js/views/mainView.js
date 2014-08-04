/*global define*/
(function () {
	'use strict';

	define([
		'marionette',
		'underscore',
		'jquery',
		'text!../../templates/main.tpl',
	], function (Marionette, _, $, MainTemplate) {

		return  Marionette.ItemView.extend({

			className: '',

			template: MainTemplate,

			audioSelector: '#audio',

			initialize: function () {
				_.bindAll(this, 'popcornInit', 'setFootNote', 'setWordClick');
				_.defer(this.popcornInit);
			},

			getWordTimes: function () {
				return {
				    w1: {start: 7.5, end: 11},
				    w2: {start: 11, end: 14.9},
				    w3: {start: 14.9, end: 17.9},
				    w4: {start: 17.9, end: 21}
				};
			},

			popcornInit: function() {
				this.pop = Popcorn(this.audioSelector);
				_.each(this.getWordTimes(), this.setFootNote);
				this.setWordClick();
			},

			setFootNote: function (time, id) {
				this.pop.footnote({
					start: time.start,
					end: time.end,
					text: '',
					target: id,
					effect: "applyclass",
					applyclass: "selected"
			    });
			},

			setWordClick: function () {
				var audio = $(this.audioSelector);
				$('.word').click(function() {
				    audio[0].currentTime = parseFloat($(this).data('start'), 10);
				    audio[0].play();
				});
			}

		});

	});

})();
