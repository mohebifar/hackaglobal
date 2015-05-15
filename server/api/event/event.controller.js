'use strict';

var _ = require('lodash');
var Event = require('./event.model');
var City = require('./../city/city.model');

// Get list of events
exports.index = function (req, res) {
  Event.find({}).populate('city').exec(function (err, events) {
    if (err) {
      return handleError(res, err);
    }
    return res.json(200, events);
  });
};

// Get a single event
exports.show = function (req, res) {
  Event.findById(req.params.id, function (err, event) {
    if (err) {
      return handleError(res, err);
    }
    if (!event) {
      return res.send(404);
    }
    return res.json(event);
  });
};

// Creates a new event in the DB.
exports.create = function (req, res) {
  Event.create(req.body, function (err, event) {
    if (err) {
      return handleError(res, err);
    }
    return res.json(201, event);
  });
};

// Updates an existing event in the DB.
exports.update = function (req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Event.findById(req.params.id, function (err, event) {
    if (err) {
      return handleError(res, err);
    }
    if (!event) {
      return res.send(404);
    }
    var updated = _.merge(event, req.body);
    updated.save(function (err) {
      if (err) {
        return handleError(res, err);
      }
      return res.json(200, event);
    });
  });
};

// Deletes a event from the DB.
exports.destroy = function (req, res) {
  Event.findById(req.params.id, function (err, event) {
    if (err) {
      return handleError(res, err);
    }
    if (!event) {
      return res.send(404);
    }
    event.remove(function (err) {
      if (err) {
        return handleError(res, err);
      }
      return res.send(204);
    });
  });
};

// Show an event by date and city
exports.showByDateAndCity = function (req, res) {
  City.findOne({
    enName: req.query.city
  }, function (err, city) {

    var date = new Date(req.query.date);

    if (err) {
      return res.send(500);
    } else if (!city) {
      return res.send(404);
    }

    Event.findOne({city: city._id, date: date}).populate('city').exec(function (err, event) {
      if (err) {
        return handleError(res, err);
      } else if (!event) {
        return res.send(404);
      }

      res.json(event);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
