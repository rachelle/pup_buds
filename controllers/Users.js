var User = require('../models/User');

var userIndex = function(req, res, next){

};

var show = function(req, res, next){

};

//new User
var userNew = function(req, res, next){

};
//saves the new user to db this will go to one route
var userCreate = function(req, res, next){

};
//new owner
var ownerNew = function(req, res, next){

};
//saves the new owner to db this will go to a different route than n user
var ownerCreate = function(req, res, next){

};

var destroy = function(req, res, next){

};

///So there will be two different forms one is to register as a user
//and the other is to register as an owner
//that will be an option in the forms when a user clicks register
//it will go to one route when a owner clicks register it will
//go to another route
//we are doing tis since u cant authenticate more than one model

