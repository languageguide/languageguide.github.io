/*global define*/
(function () {
	'use strict';

	define([
		'marionette',
		'text!../../templates/main.tpl'
	], function (Marionette, MainTemplate) {

		return  Marionette.ItemView.extend({

			className: '',

			template: MainTemplate

		});

	});

})();
