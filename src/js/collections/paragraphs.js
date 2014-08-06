/*global define*/
(function () {
	'use strict';

	define([
		'underscore',
		'backbone',
		'../utils/paragraphs.fixture',
		'localStorage'
	], function (_, Backbone, paragraphsFixture) {

		return Backbone.Collection.extend({

			storageName: 'languageguide-books-paragraphs',

			initialize: function () {
				_.bindAll(this, 'createModel');
				this.localStorage = new Backbone.LocalStorage(this.storageName);
				if (!localStorage[this.storageName]) {
					this.loadFixture();
				}
			},

			loadFixture: function () {
			    _.each(paragraphsFixture, this.createModel);
			},

			createModel: function (object) {
				this.create(object);
			}

		});
	});
})();
