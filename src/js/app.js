/* global */
(function () {
	'use strict';

	define([
		'jquery',
		'backbone',
		'marionette',
		'popcorn'
	], function ($, Backbone, Marionette) {

		return {
			start: function () {
				console.log(this, $, Popcorn, Backbone, Marionette);
			}
		};
	});
})();
