/*global define*/
(function () {
	'use strict';

	define([
		'marionette',
		'underscore',
		'jquery',
		'app',
		'text!../../templates/bookItem.tpl',
	], function (Marionette, _, $, app, bookItemTemplate) {

		return  Marionette.ItemView.extend({

			tagName: 'li',

			template: bookItemTemplate

		});

	});

})();
