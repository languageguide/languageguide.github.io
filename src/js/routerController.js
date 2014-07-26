/*global define*/
(function () {
	'use strict';

	define([
		'backbone',
		'app'
	], function (Backbone, app) {

		return  {

			doBook: function (title) {
				console.log('book title', title);
			},

			doHome: function () {
				console.log('do home', app);
			}
		};

	});

})();
