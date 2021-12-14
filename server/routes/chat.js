var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Chat = require('../models/Message.js');

/* GET ALL CHATS */
router.get('/', (req, res, next) => {
console.log(req);
  Chat.find((err, products) => {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE CHAT BY ID */
router.get('/:id', (req, res, next) => {
  Chat.findById(req.params.id,  (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE CHAT */
router.post('/', (req, res, next) => {
  Chat.create(req.body,  (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE CHAT */
router.put('/:id', (req, res, next) => {
  Chat.findByIdAndUpdate(req.params.id, req.body,  (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE CHAT */
router.delete('/:id', (req, res, next) => {
  Chat.findByIdAndRemove(req.params.id, req.body,  (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;