/*global define*/
(function () {
	'use strict';

	define([
		'marionette'
	], function (Marionette) {

		return Marionette.AppRouter.extend({

			appRoutes: {
				'book/:title': 'doBook',
				'*defaults': 'doHome'
			}

		});

	});

})();
