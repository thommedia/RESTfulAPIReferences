'use strict';

var mongoose = require('mongoose'),
Reference = mongoose.model('References');



exports.list_all_references = function(req, res) {
  Reference.find({}, function(err, reference) {
    if (err)
      res.send(err);
    res.json(reference);
  });
};


exports.create_a_reference = function(req, res) {
  var new_reference = new Reference(req.body);
  new_reference.save(function(err, reference) {
    if (err)
      res.send(err);
    res.json(reference);
  });
};

exports.read_a_reference = function(req, res) {
  Reference.findById(req.params.referenceId, function(err, reference) {
    if (err)
      res.send(err);
    res.json(reference);
  });
};

exports.update_a_reference = function(req, res) {
  Reference.findOneAndUpdate({_id:req.params.referenceId}, req.body, {new: true}, function(err, reference) {
    if (err)
      res.send(err);
    res.json(reference);
  });
};
// Task.remove({}).exec(function(){});
exports.delete_a_reference = function(req, res) {

  Reference.remove({
    _id: req.params.referenceId
  }, function(err, reference) {
    if (err)
      res.send(err);
    res.json({ message: 'Reference successfully deleted' });
  });
};
