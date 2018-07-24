'use strict';

module.exports = function(app) {
	var references = require('../controllers/referencesController');

	// references Routes
	app.route('/references')
		.get(references.list_all_references)
		.post(references.create_a_reference);

	app.route('/references/:referenceId')
		.get(references.read_a_reference)
		.put(references.update_a_reference)
		.delete(references.delete_a_reference);
};
