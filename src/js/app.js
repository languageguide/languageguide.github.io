/* global */
(function () {
	'use strict';

	define([
		'jquery',
		'popcorn'
	], function ($) {

		return {
			start: function () {
				console.log(this, $, Popcorn);
			}
		};
	});
})();
