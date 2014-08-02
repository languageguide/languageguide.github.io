/*global define*/
(function () {
	'use strict';

	define([
		'underscore',
		'backbone',
		'../utils/booksFixture',
		'localStorage'
	], function (_, Backbone, fixture) {

		return Backbone.Collection.extend({

			storageName: 'languageguide-books',

			initialize: function () {
				_.bindAll(this, 'createModel');
				this.localStorage = new Backbone.LocalStorage(this.storageName);
				if (!localStorage[this.storageName]) {
					this.loadFixture();
				}
			},

			loadFixture: function () {
			    _.each(fixture, this.createModel);
			},

			createModel: function (object) {
				this.create(object);
			}

		});
	});
})();
